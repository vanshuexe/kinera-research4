import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { 
  Sparkles, 
  RotateCcw, 
  Activity, 
  CheckCircle2, 
  Layers, 
  ChevronRight,
  Info,
  SlidersHorizontal,
  Compass,
  BarChart3,
  Globe2,
  Zap,
  ShieldCheck,
  Search,
  X
} from 'lucide-react';

export interface ConstellationNode {
  id: string;
  x: number;
  y: number;
  z: number; // 3D depth relative to center plane
  color: string;
  name: string;
  shortLabel: string;
  signalType: string;
  metric: string;
  description: string;
  sampleSize: string;
  updateFrequency: string;
  confidenceScore: number; // 0 - 100
  methodology: string;
  isCenter?: boolean;
}

export interface ConstellationEdge {
  from: string;
  to: string;
  isDashed: boolean;
}

// 7 exact nodes matching uploaded image coordinates & color palette
export const INITIAL_NODES: ConstellationNode[] = [
  {
    id: 'wearables',
    x: 82,
    y: 76,
    z: 22,
    color: '#289B85', // Emerald Teal (Top-Left)
    name: 'Digital Biomarkers & Telemetry',
    shortLabel: 'Behavior',
    signalType: 'Continuous Sensor Data',
    metric: '98.4% temporal fidelity',
    description: 'Tracks continuous adherence, biometric stability, and objective daily functioning beyond clinical visits.',
    sampleSize: '45,000+ patient-months',
    updateFrequency: 'Real-time telemetry stream',
    confidenceScore: 96,
    methodology: 'Passive biometric sensing & longitudinal micro-surveys'
  },
  {
    id: 'surveys',
    x: 242,
    y: 64,
    z: -24,
    color: '#8B6BC6', // Lavender Purple (Top-Right)
    name: 'Prescriber & Patient Surveys',
    shortLabel: 'Surveys',
    signalType: 'Validated Attitudinal Metrics',
    metric: '9,400+ verified specialist panels',
    description: 'Captures frontline diagnostic rationale, perceived risk-benefit tradeoffs, and brand inertia.',
    sampleSize: '9,400 verified HCPs & 18k patients',
    updateFrequency: 'Bi-weekly rapid pulse field',
    confidenceScore: 94,
    methodology: 'Double-blind quantitative & conjoint choice experiments'
  },
  {
    id: 'discourse',
    x: 35,
    y: 168,
    z: 28,
    color: '#EB6D58', // Coral Orange (Left)
    name: 'Social & Physician Discourse',
    shortLabel: 'Conversations',
    signalType: 'Unprompted Natural Language',
    metric: '450k+ clinical discourse snippets',
    description: 'Monitors organic community discussions to surface emerging adverse perceptions before survey cycles detect them.',
    sampleSize: '450,000+ verified practitioner posts',
    updateFrequency: 'Daily continuous indexing',
    confidenceScore: 91,
    methodology: 'NLP sentiment clustering & medical taxonomy tagging'
  },
  {
    id: 'center',
    x: 122,
    y: 212,
    z: 8,
    color: '#1B2330', // Obsidian Navy (Center)
    name: 'Kinera Decision Engine',
    shortLabel: 'Decision',
    signalType: 'Unified Synthesis Reality',
    metric: 'Cross-validated 7-point truth',
    description: 'Synthesizes disparate behavioral, clinical, and commercial signals into one coherent commercial roadmap.',
    sampleSize: 'Multi-stream triangulation',
    updateFrequency: 'Continuous synthesis',
    confidenceScore: 99,
    methodology: 'Cross-channel signal harmonization & decision mapping',
    isCenter: true
  },
  {
    id: 'claims',
    x: 190,
    y: 178,
    z: -10,
    color: '#E26C5C', // Salmon Coral (Middle-Right)
    name: 'Longitudinal EHR & Claims',
    shortLabel: 'Claims',
    signalType: 'Real-World Treatment Pathways',
    metric: '1.2M+ longitudinal patient trajectories',
    description: 'Maps lines of therapy, switching triggers, co-morbidities, and adherence drop-off curves over 36 months.',
    sampleSize: '1.2 Million patient longitudinal records',
    updateFrequency: 'Monthly closed-claims refresh',
    confidenceScore: 98,
    methodology: 'De-identified HIPAA compliance RWE longitudinal cohort tracking'
  },
  {
    id: 'market',
    x: 224,
    y: 278,
    z: -18,
    color: '#EBB854', // Golden Amber (Bottom-Right)
    name: 'Market Access & Formulary',
    shortLabel: 'Market',
    signalType: 'Payer & Distribution Friction',
    metric: '92% US covered-lives visibility',
    description: 'Evaluates prior authorization burdens, step therapy friction, and co-pay tier impacts on actual fill rates.',
    sampleSize: '240M+ covered lives database',
    updateFrequency: 'Weekly formulary updates',
    confidenceScore: 95,
    methodology: 'Payer decision tree mapping & prescription fill audit'
  },
  {
    id: 'registries',
    x: 108,
    y: 326,
    z: 14,
    color: '#7E6278', // Muted Plum (Bottom-Most)
    name: 'Clinical Registries & Phase IV',
    shortLabel: 'Outcomes',
    signalType: 'Comparative Effectiveness',
    metric: '75+ clinical registries connected',
    description: 'Bridges randomized controlled trial efficacy with true real-world patient persistence and clinical endpoints.',
    sampleSize: '75+ disease registries',
    updateFrequency: 'Quarterly clinical audit',
    confidenceScore: 97,
    methodology: 'RWE observational endpoint analysis'
  }
];

// Exact edges matching reference photo: 7 Solid, 4 Dashed
export const EDGES: ConstellationEdge[] = [
  // Solid Lines (7)
  { from: 'wearables', to: 'surveys', isDashed: false },
  { from: 'wearables', to: 'discourse', isDashed: false },
  { from: 'discourse', to: 'registries', isDashed: false },
  { from: 'registries', to: 'market', isDashed: false },
  { from: 'market', to: 'claims', isDashed: false },
  { from: 'claims', to: 'center', isDashed: false },
  { from: 'center', to: 'wearables', isDashed: false },

  // Dashed Lines (4)
  { from: 'discourse', to: 'center', isDashed: true },
  { from: 'center', to: 'registries', isDashed: true },
  { from: 'claims', to: 'surveys', isDashed: true },
  { from: 'market', to: 'surveys', isDashed: true }
];

interface NetworkConstellationProps {
  onSelectNodeForStudy?: (nodeName: string) => void;
}

export const NetworkConstellation: React.FC<NetworkConstellationProps> = ({
  onSelectNodeForStudy
}) => {
  const [nodes, setNodes] = useState<ConstellationNode[]>(INITIAL_NODES);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'topology' | 'matrix' | 'compare'>('topology');

  // 3D Parallax Tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [targetTilt, setTargetTilt] = useState({ x: 0, y: 0 });
  const [isParallaxActive, setIsParallaxActive] = useState(true);

  // Dragging state
  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const dragOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Convergence pulse animation
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  // Signal Flow speed multiplier
  const [isSignalFlowActive, setIsSignalFlowActive] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Smooth tilt animation loop
  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      setTilt((prev) => ({
        x: prev.x + (targetTilt.x - prev.x) * 0.1,
        y: prev.y + (targetTilt.y - prev.y) * 0.1,
      }));
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isParallaxActive || draggingNodeId) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    
    setTargetTilt({
      x: -normY * 6,
      y: normX * 7
    });
  };

  const handleMouseLeave = () => {
    if (!draggingNodeId) {
      setTargetTilt({ x: 0, y: 0 });
      setHoveredNodeId(null);
    }
  };

  const getSvgPoint = (clientX: number, clientY: number) => {
    if (!svgRef.current) return { x: 0, y: 0 };
    const svg = svgRef.current;
    const pt = svg.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const ctm = svg.getScreenCTM();
    if (ctm) {
      return pt.matrixTransform(ctm.inverse());
    }
    return { x: clientX, y: clientY };
  };

  const handleMouseDownNode = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setDraggingNodeId(id);
    setActiveNodeId(id);

    if (svgRef.current) {
      const svgPoint = getSvgPoint(e.clientX, e.clientY);
      const targetNode = nodes.find(n => n.id === id);
      if (targetNode) {
        dragOffsetRef.current = {
          x: svgPoint.x - targetNode.x,
          y: svgPoint.y - targetNode.y,
        };
      }
    }
  };

  const handleTouchStartNode = (e: React.TouchEvent, id: string) => {
    e.stopPropagation();
    setDraggingNodeId(id);
    setActiveNodeId(id);

    if (svgRef.current && e.touches.length > 0) {
      const touch = e.touches[0];
      const svgPoint = getSvgPoint(touch.clientX, touch.clientY);
      const targetNode = nodes.find(n => n.id === id);
      if (targetNode) {
        dragOffsetRef.current = {
          x: svgPoint.x - targetNode.x,
          y: svgPoint.y - targetNode.y,
        };
      }
    }
  };

  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
      if (!draggingNodeId || !svgRef.current) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const svgPoint = getSvgPoint(clientX, clientY);

      setNodes((prev) =>
        prev.map((node) => {
          if (node.id === draggingNodeId) {
            return {
              ...node,
              x: Math.max(10, Math.min(290, svgPoint.x - dragOffsetRef.current.x)),
              y: Math.max(10, Math.min(350, svgPoint.y - dragOffsetRef.current.y)),
            };
          }
          return node;
        })
      );
    };

    const handleGlobalUp = () => {
      if (draggingNodeId) {
        setDraggingNodeId(null);
        springBack();
      }
    };

    window.addEventListener('mousemove', handleGlobalMove);
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchmove', handleGlobalMove);
    window.addEventListener('touchend', handleGlobalUp);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchmove', handleGlobalMove);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [draggingNodeId]);

  const springBack = useCallback(() => {
    setNodes(INITIAL_NODES);
  }, []);

  const handleReset = () => {
    setNodes(INITIAL_NODES);
    setTargetTilt({ x: 0, y: 0 });
    setTilt({ x: 0, y: 0 });
    setActiveNodeId(null);
    setHoveredNodeId(null);
  };

  const triggerSynthesis = () => {
    setIsSynthesizing(true);
    setPulseKey(prev => prev + 1);
    setActiveNodeId('center');
    
    setTimeout(() => {
      setIsSynthesizing(false);
    }, 2400);
  };

  const projectedNodes = useMemo(() => {
    return nodes.map((node) => {
      const depthFactor = (node.z / 30);
      const projX = node.x + (tilt.y * depthFactor * 0.65);
      const projY = node.y - (tilt.x * depthFactor * 0.65);
      const scale = 1 + (node.z / 150) + (tilt.x * 0.003);

      return {
        ...node,
        projX,
        projY,
        scale: Math.max(0.75, Math.min(1.35, scale))
      };
    });
  }, [nodes, tilt]);

  const activeNode = useMemo(() => {
    const targetId = activeNodeId || hoveredNodeId;
    return targetId ? nodes.find(n => n.id === targetId) : null;
  }, [activeNodeId, hoveredNodeId, nodes]);

  return (
    <div className="relative flex flex-col items-center select-none w-full max-w-[460px]">
      
      {/* View Mode Toolbar Header */}
      <div className="w-full mb-3 flex items-center justify-between bg-white/90 p-1.5 rounded-2xl border border-[#EAE4D8] shadow-2xs">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setViewMode('topology')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'topology'
                ? 'bg-[#111625] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-[#C84B31]" />
            <span>3D Constellation</span>
          </button>

          <button
            onClick={() => setViewMode('matrix')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'matrix'
                ? 'bg-[#111625] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-[#289B85]" />
            <span>Signal Matrix</span>
          </button>
        </div>

        <button
          onClick={triggerSynthesis}
          disabled={isSynthesizing}
          className="px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-[#C84B31] hover:bg-[#B23F27] transition-all cursor-pointer flex items-center gap-1 shadow-xs active:scale-95 disabled:opacity-50"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Synthesize</span>
        </button>
      </div>

      {/* Main Container Card */}
      {viewMode === 'topology' ? (
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full aspect-[1/1.14] rounded-3xl bg-gradient-to-b from-[#FAF7F2] to-[#F4EFE6] border border-[#EAE4D8] shadow-sm p-4 sm:p-5 flex flex-col items-center justify-between overflow-hidden cursor-crosshair group transition-all duration-300 hover:shadow-md"
        >
          {/* Ambient Warm Radial Vignette matching image reference */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(255,255,255,0.9)_0%,rgba(247,242,233,0.5)_55%,rgba(235,227,215,0.85)_100%)] pointer-events-none" />

          {/* Top Status Header */}
          <div className="w-full flex items-center justify-between z-10 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C84B31] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-sans-clean">
                KINERA SIGNAL TOPOLOGY
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isSignalFlowActive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`} />
              <span className="text-[10px] font-semibold text-slate-600 font-sans-clean">
                {isSignalFlowActive ? 'Live Streams Active' : 'Static Schema'}
              </span>
            </div>
          </div>

          {/* Central Interactive SVG Canvas — no CSS 3D transforms, nodes move via SVG projection math */}
          <div className="relative w-full flex-1 flex items-center justify-center my-1">
            <svg 
              ref={svgRef}
              viewBox="10 30 265 315" 
              className="w-full h-full relative z-10 overflow-visible"
            >
              <defs>
                <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. EDGES LAYER (7 Solid, 4 Dashed) */}
              <g className="edges-layer">
                {EDGES.map((edge, idx) => {
                  const from = projectedNodes.find(n => n.id === edge.from)!;
                  const to = projectedNodes.find(n => n.id === edge.to)!;
                  
                  const isSelected = 
                    (activeNodeId === edge.from || activeNodeId === edge.to) ||
                    (hoveredNodeId === edge.from || hoveredNodeId === edge.to);

                  return (
                    <g key={`${edge.from}-${edge.to}-${idx}`}>
                      {/* Transparent wider hit path for touch/click */}
                      <line
                        x1={from.projX}
                        y1={from.projY}
                        x2={to.projX}
                        y2={to.projY}
                        stroke="transparent"
                        strokeWidth="14"
                        className="cursor-pointer"
                        onClick={() => setActiveNodeId(edge.to)}
                      />

                      {/* Visible Edge Line */}
                      <line
                        x1={from.projX}
                        y1={from.projY}
                        x2={to.projX}
                        y2={to.projY}
                        stroke={isSelected ? '#C84B31' : '#C7C0B3'}
                        strokeWidth={isSelected ? '2' : '1.2'}
                        strokeDasharray={edge.isDashed ? '4 3.5' : undefined}
                        strokeLinecap="round"
                        opacity={isSelected ? 1 : edge.isDashed ? 0.72 : 0.88}
                        className="transition-colors duration-200"
                      />

                      {/* Moving Signal Flow Particles */}
                      {isSignalFlowActive && (
                        <circle r={isSelected ? '2.5' : '1.8'} fill={isSelected ? '#C84B31' : '#8E8578'}>
                          <animateMotion
                            path={`M ${from.projX} ${from.projY} L ${to.projX} ${to.projY}`}
                            dur={edge.isDashed ? '3.8s' : '2.6s'}
                            repeatCount="indefinite"
                            begin={`${(idx * 0.45) % 2.5}s`}
                          />
                        </circle>
                      )}
                    </g>
                  );
                })}
              </g>

              {/* 2. SYNTHESIS CONVERGENCE CONCENTRIC RIPPLES */}
              {isSynthesizing && (
                <g key={`synth-${pulseKey}`}>
                  <circle
                    cx={projectedNodes.find(n => n.id === 'center')!.projX}
                    cy={projectedNodes.find(n => n.id === 'center')!.projY}
                    r="8"
                    fill="none"
                    stroke="#C84B31"
                    strokeWidth="2.5"
                    opacity="0.9"
                  >
                    <animate attributeName="r" from="8" to="130" dur="1.5s" begin="0.2s" fill="freeze" />
                    <animate attributeName="opacity" from="0.9" to="0" dur="1.5s" begin="0.2s" fill="freeze" />
                  </circle>

                  <circle
                    cx={projectedNodes.find(n => n.id === 'center')!.projX}
                    cy={projectedNodes.find(n => n.id === 'center')!.projY}
                    r="6"
                    fill="none"
                    stroke="#289B85"
                    strokeWidth="2"
                    opacity="0.8"
                  >
                    <animate attributeName="r" from="6" to="90" dur="1.3s" begin="0.4s" fill="freeze" />
                    <animate attributeName="opacity" from="0.8" to="0" dur="1.3s" begin="0.4s" fill="freeze" />
                  </circle>
                </g>
              )}

              {/* 3. NODES LAYER */}
              <g className="nodes-layer">
                {projectedNodes.map((node) => {
                  const isActive = activeNodeId === node.id;
                  const isHovered = hoveredNodeId === node.id;
                  const isCenter = node.isCenter;
                  const isDragging = draggingNodeId === node.id;

                  const baseRadius = isCenter ? 6.4 : 4.8;
                  const activeRadius = (isHovered || isActive || isDragging) ? baseRadius + 2.5 : baseRadius;

                  return (
                    <g
                      key={node.id}
                      onMouseEnter={() => setHoveredNodeId(node.id)}
                      onMouseLeave={() => setHoveredNodeId(null)}
                      onMouseDown={(e) => handleMouseDownNode(e, node.id)}
                      onTouchStart={(e) => handleTouchStartNode(e, node.id)}
                      className="cursor-grab active:cursor-grabbing"
                    >
                      {/* Touch target expander */}
                      <circle cx={node.projX} cy={node.projY} r="16" fill="transparent" />

                      {/* Active pulse aura */}
                      {(isActive || isHovered || (isCenter && isSynthesizing)) && (
                        <circle
                          cx={node.projX}
                          cy={node.projY}
                          r={activeRadius + 7}
                          fill="none"
                          stroke={node.color}
                          strokeWidth="1.5"
                          opacity="0.5"
                          className="animate-ping"
                          style={{ animationDuration: '2.2s' }}
                        />
                      )}

                      {/* Main Node Circle */}
                      <circle
                        cx={node.projX}
                        cy={node.projY}
                        r={activeRadius}
                        fill={node.color}
                        stroke="#FFFFFF"
                        strokeWidth={isCenter ? '2.5' : '2'}
                        className="transition-all duration-200"
                        filter={isActive ? 'url(#nodeGlow)' : 'none'}
                      />

                      {/* Floating tooltip label */}
                      {(isHovered || isActive) && (
                        <g className="pointer-events-none animate-in fade-in zoom-in-95">
                          <rect
                            x={node.projX + (node.projX > 150 ? -88 : 14)}
                            y={node.projY - 14}
                            width="76"
                            height="22"
                            rx="6"
                            fill="#111625"
                            opacity="0.94"
                          />
                          <text
                            x={node.projX + (node.projX > 150 ? -50 : 52)}
                            y={node.projY + 1}
                            textAnchor="middle"
                            fill="#FFFFFF"
                            fontSize="10"
                            fontWeight="600"
                            fontFamily="Plus Jakarta Sans, sans-serif"
                          >
                            {node.shortLabel}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>

          {/* Micro Toolbar Controls */}
          <div className="w-full pt-2 flex items-center justify-between border-t border-[#EAE4D8]/80 text-[11px] text-slate-500 z-10">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsParallaxActive(!isParallaxActive)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-semibold transition-colors cursor-pointer flex items-center gap-1 ${
                  isParallaxActive ? 'bg-[#111625] text-white' : 'bg-slate-200/70 text-slate-600 hover:bg-slate-300/70'
                }`}
                title="Toggle 3D perspective tilt"
              >
                <Layers className="w-3 h-3" />
                3D Parallax
              </button>

              <button
                onClick={() => setIsSignalFlowActive(!isSignalFlowActive)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-semibold transition-colors cursor-pointer flex items-center gap-1 ${
                  isSignalFlowActive ? 'bg-[#289B85] text-white' : 'bg-slate-200/70 text-slate-600 hover:bg-slate-300/70'
                }`}
                title="Toggle signal particle streams"
              >
                <Activity className="w-3 h-3" />
                Streams
              </button>
            </div>

            <button
              onClick={handleReset}
              className="p-1 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 transition-colors cursor-pointer"
              title="Reset node positions"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      ) : (
        /* Matrix Signal Stream View */
        <div className="w-full aspect-[1/1.14] rounded-3xl bg-white border border-[#EAE4D8] p-5 flex flex-col justify-between overflow-y-auto space-y-3">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900 font-sans-clean flex items-center justify-between">
              <span>Harmonized Data Streams</span>
              <span className="text-[10px] font-semibold text-[#289B85] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                7 Active Feeds
              </span>
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Quantitative claims, attitudinal surveys, biometric telemetry, and physician discourse streams triangulated into the Kinera Decision Engine.
            </p>
          </div>

          <div className="space-y-2.5 flex-1 pt-1">
            {nodes.map((node) => (
              <div
                key={node.id}
                onClick={() => {
                  setActiveNodeId(node.id);
                  setViewMode('topology');
                }}
                className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                  activeNodeId === node.id 
                    ? 'border-[#C84B31] bg-[#FAF5F3]' 
                    : 'border-[#EAE4D8] hover:border-slate-400 bg-[#FAF8F5]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-3.5 h-3.5 rounded-full shrink-0 shadow-2xs" style={{ backgroundColor: node.color }} />
                  <div>
                    <div className="text-xs font-bold text-slate-950 font-sans-clean group-hover:text-[#C84B31] transition-colors">
                      {node.name}
                    </div>
                    <div className="text-[10px] text-slate-500 font-normal">
                      {node.signalType} • {node.updateFrequency}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-semibold text-slate-800 font-sans-clean">
                    {node.confidenceScore}%
                  </div>
                  <div className="text-[9px] text-slate-400 uppercase tracking-widest font-sans-clean">
                    Rigors
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Node Inspector Detail Card */}
      {activeNode ? (
        <div className="w-full mt-3 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-[#E4DFD3] shadow-md animate-in fade-in slide-in-from-top-2 duration-200 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span 
                className="w-3.5 h-3.5 rounded-full shrink-0 border border-white shadow-2xs" 
                style={{ backgroundColor: activeNode.color }} 
              />
              <div>
                <span className="text-xs font-bold text-slate-950 font-sans-clean block">
                  {activeNode.name}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  {activeNode.signalType}
                </span>
              </div>
            </div>

            <button 
              onClick={() => setActiveNodeId(null)}
              className="p-1 text-slate-400 hover:text-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            {activeNode.description}
          </p>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="bg-[#FAF8F5] p-2 rounded-xl border border-[#EAE4D8]">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block font-sans-clean">
                PANEL / COHORT DEPTH
              </span>
              <span className="text-xs font-semibold text-slate-900 font-sans-clean">
                {activeNode.sampleSize}
              </span>
            </div>

            <div className="bg-[#FAF8F5] p-2 rounded-xl border border-[#EAE4D8]">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block font-sans-clean">
                KEY METRIC
              </span>
              <span className="text-xs font-semibold text-slate-900 font-sans-clean">
                {activeNode.metric}
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-600 font-medium flex items-center gap-1.5 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#289B85]" />
              {activeNode.methodology}
            </span>

            {onSelectNodeForStudy && (
              <button
                onClick={() => onSelectNodeForStudy(activeNode.name)}
                className="text-xs font-semibold text-[#C84B31] hover:text-[#933728] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Scope Study</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full mt-2.5 px-3.5 py-2 rounded-2xl bg-[#F4EFE6]/70 border border-[#E8E2D5] flex items-center justify-between text-xs text-slate-600">
          <span className="flex items-center gap-1.5 text-slate-700 font-normal">
            <Info className="w-4 h-4 text-[#C84B31]" />
            Click or drag nodes to inspect individual market signals
          </span>
          <span className="text-[11px] font-bold text-[#C84B31] font-sans-clean">
            7 Signal Nodes
          </span>
        </div>
      )}

    </div>
  );
};
