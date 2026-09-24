import { SolutionItem, InsightArticle, IndustryCategory } from '../types';

export const TRUSTED_CLIENTS = [
  'Aravel Health',
  'Marchand & Kohl',
  'Northfield Bio',
  'Union Consumer Group',
  'Verity Pharma'
];

export const STATS_METRICS = [
  {
    value: '40+',
    label: "Countries where we've fielded primary research studies"
  },
  {
    value: '1,200+',
    label: 'Healthcare professionals and patients in our verified panels'
  },
  {
    value: '6d',
    label: 'Average turnaround from field close to first insight readout'
  },
  {
    value: '98%',
    label: 'Client studies delivered on or ahead of agreed timeline'
  }
];

export const SOLUTIONS_LIST: SolutionItem[] = [
  {
    id: 'primary-market-research',
    badge: 'Pr',
    badgeBg: '#D1EAE2',
    badgeText: '#18473D',
    title: 'Primary Market Research',
    description: 'Quant and qual studies with patients, HCPs, payers, and consumers — surveys, interviews, and advisory boards designed around your specific decision.',
    fullDetails: {
      overview: 'We design bespoke qualitative and quantitative instruments engineered specifically around the high-stakes decision your commercial or clinical leadership faces, cutting out extraneous questions.',
      keyMethods: [
        'Double-blind in-depth stakeholder interviews (IDIs)',
        'Physician and payer digital advisory boards',
        'Segmented quantitative surveys across validated panels',
        'Longitudinal patient journey & barrier mapping'
      ],
      typicalTimeline: '2 to 4 weeks from scope to executive readout',
      sampleQuestions: [
        'How will oncologists sequence our new compound against current standards of care?',
        'What are the primary clinical and economic barriers preventing formulary tier-1 access?'
      ]
    }
  },
  {
    id: 'analytics-data-strategy',
    badge: 'An',
    badgeBg: '#F5E8BE',
    badgeText: '#5A4A12',
    title: 'Analytics & Data Strategy',
    description: 'Turning first- and third-party data into forecasting models, segmentation, and dashboards your team can actually use day to day.',
    fullDetails: {
      overview: 'Transform disparate claims records, CRM interactions, EHR feeds, and market sales data into unified predictive models and actionable commercial intelligence.',
      keyMethods: [
        'Prescriber deciling and propensity modeling',
        'Dynamic market sizing & patient volume forecasting',
        'Executive decision dashboards in real time',
        'Multi-source claims and registry harmonization'
      ],
      typicalTimeline: '3 to 6 weeks for custom model deployment',
      sampleQuestions: [
        'Which physician clusters exhibit the highest propensity to adopt early-stage therapeutic classes?',
        'What real-world patient drop-off points exist between prescription write and first fulfillment?'
      ]
    }
  },
  {
    id: 'kol-expert-identification',
    badge: 'KOL',
    badgeBg: '#F3D7CA',
    badgeText: '#6A3120',
    title: 'KOL & Expert Identification',
    description: 'Mapping and engaging the opinion leaders and specialists who shape decisions in your therapeutic area or category.',
    fullDetails: {
      overview: 'Beyond simple publication citation counts, we track true influence networks: clinical trial PI leadership, treatment guidelines authorship, digital discourse, and community referral hubs.',
      keyMethods: [
        'Network graph analysis of referral corridors',
        'Digital opinion leader (DOL) footprint evaluation',
        'Emerging regional specialist identification',
        'Advisory board recruitment and compliance vetting'
      ],
      typicalTimeline: '10 to 14 business days',
      sampleQuestions: [
        'Who are the fast-rising clinical investigators driving protocol innovation in our rare disease space?',
        'Which digital medical influencers genuinely shape specialist prescribing behavior?'
      ]
    }
  },
  {
    id: 'brand-message-tracking',
    badge: 'Br',
    badgeBg: '#E8E2D5',
    badgeText: '#4A4336',
    title: 'Brand & Message Tracking',
    description: "Continuous read on awareness, perception, and message pull-through, so you know what's landing before your competitors do.",
    fullDetails: {
      overview: 'High-frequency continuous tracker that isolates signal from noise. Spot message fatigue, monitor competitor claims, and verify unaided vs. aided recall in real time.',
      keyMethods: [
        'Pulse wave testing with verified target HCP cohorts',
        'Message pull-through and credibility benchmarking',
        'Competitive claim counter-positioning analysis',
        'Rapid creative and value proposition testing'
      ],
      typicalTimeline: 'Continuous reporting with bi-weekly executive briefs',
      sampleQuestions: [
        'Is our core efficacy claim resonating over competitor safety messaging in tier-1 institutions?',
        'Where are target prescribers encountering conflicting clinical narratives?'
      ]
    }
  },
  {
    id: 'evaluation-impact',
    badge: 'Ev',
    badgeBg: '#DCE8BE',
    badgeText: '#3F4F19',
    title: 'Evaluation & Impact',
    description: 'Rigorous before/after and longitudinal measurement for programs, campaigns, and patient support initiatives.',
    fullDetails: {
      overview: 'Isolate the causal business and clinical impact of commercial initiatives, patient assistance hubs, and digital educational campaigns with statistical rigor.',
      keyMethods: [
        'Difference-in-differences (DiD) observational studies',
        'Patient adherence telemetry and persistence curves',
        'ROI and net-promoter analysis for patient support services',
        'Field force enablement efficacy auditing'
      ],
      typicalTimeline: 'Baseline plus ongoing quarterly readouts',
      sampleQuestions: [
        'Did our digital patient onboarding hub verifiably improve 6-month therapy persistence?',
        'Which support interventions generated the highest retention among newly diagnosed patients?'
      ]
    }
  },
  {
    id: 'strategic-advisory',
    badge: 'St',
    badgeBg: '#F0DFC8',
    badgeText: '#5E4115',
    title: 'Strategic Advisory',
    description: 'Senior researchers embedded alongside your team for market entry, positioning, and go-to-market strategy work.',
    fullDetails: {
      overview: 'No junior handoffs. Veteran research directors work directly with your VP and director-level stakeholders to translate empirical market evidence into defensible strategic roadmaps.',
      keyMethods: [
        'War-gaming and competitive scenario workshops',
        'Go-to-market (GTM) strategy stress-testing',
        'Target product profile (TPP) commercial refinement',
        'Executive board and investor readout synthesis'
      ],
      typicalTimeline: 'Flexible retainer or sprint-based engagement',
      sampleQuestions: [
        'How should we price and position our asset ahead of a second-to-market competitor entry?',
        'What strategic pivot will maximize enterprise valuation before our Series C / IPO window?'
      ]
    }
  }
];

export const METHOD_STEPS = [
  {
    title: '1. Signal Alignment',
    description: 'We start with your open commercial question, defining exactly what a good, actionable answer needs to look like.'
  },
  {
    title: '2. Custom Structure',
    description: 'We architect a custom methodology — blending qualitative, quantitative, and secondary data sources specific to your decision.'
  },
  {
    title: '3. Precision Sourcing',
    description: 'Targeted fieldwork and panel data collection, strictly controlled for quality, speed, and exact respondent criteria.'
  },
  {
    title: '4. Deep Synthesis',
    description: 'Senior researchers — not junior analysts — connect the raw findings into a clear, cohesive, and decision-ready narrative.'
  },
  {
    title: '5. Strategic Translation',
    description: 'We translate insights into concrete commercial strategies, mapping out the "so what" and "what now" for your brand.'
  },
  {
    title: '6. Ongoing Support',
    description: 'We stay engaged past the final readout to help socialize findings across your organization and adjust to new questions.'
  }
];

export const INDUSTRIES_LIST: IndustryCategory[] = [
  {
    id: 'pharma-biotech',
    name: 'Pharma & Biotech',
    description: 'Supporting therapeutic franchises across oncology, immunology, rare diseases, and CNS with decision-grade patient and prescriber intelligence.',
    recentQuestions: [
      'Determining optimal sequencing against biosimilar market entries',
      'Validating patient-reported burden for regulatory endpoint filings'
    ]
  },
  {
    id: 'medical-devices',
    name: 'Medical Devices',
    description: 'Guiding surgical robotics, cardiovascular hardware, and diagnostic device makers through hospital procurement committee dynamics.',
    recentQuestions: [
      'Value proposition testing for hospital capital budget approvals',
      'Surgical workflow adoption friction mapping'
    ]
  },
  {
    id: 'health-insurance',
    name: 'Health Insurance',
    description: 'Demystifying plan member experience, preventative program engagement, and provider network satisfaction.',
    recentQuestions: [
      'Member retention drivers in Medicare Advantage renewals',
      'Value-based care incentive alignment with primary care networks'
    ]
  },
  {
    id: 'consumer-health',
    name: 'Consumer Health',
    description: 'Translating consumer OTC wellness habits, vitamin & supplement loyalty, and digital self-care behaviors.',
    recentQuestions: [
      'E-commerce vs. retail pharmacy shopper basket decision journey',
      'Ingredient transparency impact on premium brand switching'
    ]
  },
  {
    id: 'digital-health',
    name: 'Digital Health',
    description: 'Evaluating user retention, clinician prescription behavior, and reimbursement viability for digital therapeutics and remote monitoring platforms.',
    recentQuestions: [
      'User drop-off analysis in remote chronic condition management apps',
      'Physician EHR integration barriers and willingness to prescribe'
    ]
  },
  {
    id: 'cpg-retail',
    name: 'CPG & Retail',
    description: 'Analyzing shifting consumer health perceptions, functional beverage trends, and clean-label demand.',
    recentQuestions: [
      'Consumer trade-up willingness for clinically backed personal care',
      'Omnichannel loyalty drivers in specialty health retail'
    ]
  },
  {
    id: 'nonprofit-public-health',
    name: 'Nonprofit & Public Health',
    description: 'Assisting foundations, disease advocacy groups, and public health institutions in measuring community health interventions.',
    recentQuestions: [
      'Caregiver burden measurement across underserved rural communities',
      'Vaccine and preventative screening communication effectiveness'
    ]
  },
  {
    id: 'animal-health',
    name: 'Animal Health',
    description: 'Evaluating veterinary procurement, pet owner wellness trends, and livestock preventative care innovations.',
    recentQuestions: [
      'Clinic adoption of premium diagnostic panels vs point-of-care testing',
      'Direct-to-consumer pet supplement loyalty and switching behavior'
    ]
  },
  {
    id: 'diagnostics-testing',
    name: 'Diagnostics & Testing',
    description: 'Providing intelligence on laboratory equipment purchasing, at-home test market viability, and genetic screening adoption.',
    recentQuestions: [
      'Reimbursement viability for novel oncology biomarker panels',
      'Physician hesitancy in adopting new liquid biopsy guidelines'
    ]
  },
  {
    id: 'b2b-health-services',
    name: 'B2B Health Services',
    description: 'Mapping the vendor landscape for revenue cycle management, supply chain tech, and specialized staffing solutions.',
    recentQuestions: [
      'Hospital CFO willingness to outsource specialized revenue cycle functions',
      'Market sizing for AI-driven clinical documentation software'
    ]
  },
  {
    id: 'private-equity',
    name: 'Healthcare Private Equity',
    description: 'Delivering rapid commercial due diligence and voice-of-customer validation for healthcare assets under consideration.',
    recentQuestions: [
      'Validating total addressable market and net-promoter score for a target asset',
      'Assessing the threat of upcoming regulatory shifts on clinic roll-ups'
    ]
  }
];

export const INSIGHTS_LIST: InsightArticle[] = [
  {
    id: 'why-panel-fatigue-is-quietly-skewing-your-hcp-data',
    category: 'METHODOLOGY',
    title: 'Why panel fatigue is quietly skewing your HCP data',
    description: "What we're seeing across 40+ fielded studies, and three ways to keep sample quality high.",
    gradientClass: 'from-emerald-300 via-teal-400 to-cyan-400',
    readTime: '5 min read',
    author: 'Kinera Method Practice Group',
    content: [
      "In commercial biopharma research, teams frequently rely on automated physician panels to quickly gauge market reactions. Over the past 24 months, our data indicates that <b>specialist response fatigue</b> has dramatically increased survey speeding and generic multi-choice selection.",
      "> \"We're seeing oncologists and neurologists being asked to complete 40-minute generic surveys on mobile screens between patient consults. The signal-to-noise ratio rapidly degrades under these conditions.\"",
      "### The Cost of Convenience",
      "When market researchers optimize for speed and cost-per-complete, they sacrifice context. A doctor rushing through a drag-and-drop ranking exercise is not providing strategic insight; they are performing a task. This leads to brand teams making multimillion-dollar positioning decisions based on data that is, at best, a reflection of the survey's UX design rather than clinical reality.",
      "### Three Active Countermeasures",
      "At Kinera Research, we employ three specific tactics to preserve data integrity:",
      "<b>1. Ruthless Scoping:</b> We scope engagements strictly around the core business decision, cutting survey length by up to 50%. If a question doesn't directly influence the final decision tree, it gets cut.",
      "<b>2. Qualitative Verification:</b> We use micro-qualitative follow-ups. If a quantitative trend seems anomalous, we immediately trigger short 15-minute verification calls with a subset of the cohort.",
      "<b>3. Respectful Compensation:</b> We compensate panel specialists for verified thoughtful contribution rather than speed of completion.",
      "The result is higher data fidelity, genuine verbatims, and findings your commercial leadership can defend with confidence."
    ]
  },
  {
    id: 'the-self-directed-patient-is-changing-how-brands-earn-trust',
    category: 'CATEGORY TRENDS',
    title: 'The self-directed patient is changing how brands earn trust',
    description: "A look at how patients are researching treatment decisions before ever speaking to a rep.",
    gradientClass: 'from-amber-300 via-orange-400 to-rose-400',
    readTime: '6 min read',
    author: 'Patient & Consumer Intelligence Team',
    content: [
      "Patients and family caregivers no longer passively accept a first-line therapeutic recommendation without extensive independent research. From specialized Reddit communities to scientific journal preprints, the <b>self-directed patient</b> represents a seismic shift in healthcare decision-making.",
      "### The New Patient Journey",
      "Our research shows that in specialty and chronic conditions (such as autoimmune disorders or rare oncology), over <b>68% of patients have already researched 2 to 3 alternative therapeutic mechanisms</b> prior to their specialist appointment.",
      "> \"Patients aren't just googling symptoms anymore. They are reading the FDA package inserts, comparing side-effect profiles on TikTok, and walking into clinics with a specific brand name in mind.\"",
      "### Where Traditional Messaging Fails",
      "Traditional commercial messaging built around physician detailing alone misses this critical early window of trust formation. If a brand only speaks to the doctor, they leave the patient to be educated by competitors, patient-advocacy forums, or worse, misinformation.",
      "Brands that succeed provide clear, transparent, scientifically grounded educational assets directly accessible to caregivers. When brands respect patient agency through empathetic, plain-language clinical evidence, physician-patient dialogue becomes constructive rather than skeptical."
    ]
  },
  {
    id: 'cutting-a-market-entry-decision-from-6-months-to-8-weeks',
    category: 'CASE STUDY',
    title: 'Cutting a market-entry decision from 6 months to 8 weeks',
    description: 'How a mid-size medtech brand used our Signal-to-Synthesis framework to move faster than legacy players.',
    gradientClass: 'from-indigo-400 via-purple-400 to-pink-400',
    readTime: '7 min read',
    author: 'Strategic Advisory Practice',
    content: [
      "A fast-growing surgical robotics firm faced a critical dilemma: enter the European market with direct capital equipment sales, or partner with established regional distributors. They had one shot to get it right.",
      "### The Syndicated Trap",
      "Traditional market research consultancies proposed a 6-month, 200-page syndicated study costing hundreds of thousands of dollars. The problem? The client needed an answer before their Q3 board meeting, and a generic 'State of EU Robotics' report wouldn't answer their specific margin-structure questions.",
      "### The Signal-to-Synthesis Approach",
      "Kinera deployed our bespoke framework. We focused <i>exclusively</i> on the three operational gating items:",
      "<b>1. Hospital tender committee approval cycles</b> (Can we navigate the bureaucracy directly?)",
      "<b>2. Capital expenditure authority limits</b> (Who actually signs the check?)",
      "<b>3. Surgeon workflow friction</b> (Will they advocate for us if we don't have local reps?)",
      "> \"By cutting out the macroeconomic fluff, we reduced the fieldwork timeline by 70% while actually increasing the depth of the insights that mattered.\"",
      "Within 8 weeks, our team conducted targeted stakeholder interviews across 14 hospital systems in Germany, the UK, and France. We delivered a decision-ready playbook that led the executive team to a hybrid distribution model — saving an estimated $2.4M in overhead."
    ]
  },
  {
    id: 'how-ai-is-reshaping-clinical-trial-recruitment',
    category: 'INNOVATION',
    title: 'How AI is reshaping clinical trial recruitment',
    description: 'Our early findings on patient willingness to engage with AI-driven screening protocols.',
    gradientClass: 'from-blue-400 via-cyan-300 to-emerald-300',
    readTime: '4 min read',
    author: 'Digital Health Practice',
    content: [
      "Clinical trial recruitment remains one of the largest bottlenecks in bringing new therapies to market. Recently, AI-driven pre-screening tools and predictive algorithms have promised to accelerate this process by identifying eligible patients through EHR data mining.",
      "### The Demographic Divide",
      "However, our latest quantitative study of 2,500 chronic illness patients reveals a complex reality: while younger demographics (18-35) are highly comfortable sharing health data with algorithms for matching, <b>patients over 65 show significant hesitation.</b>",
      "> \"When an AI chatbot asked for my medical history to qualify me for a trial, it felt invasive. I want to hear about these options from my actual doctor.\" — <i>Study Participant, 68</i>",
      "### Human-in-the-Loop is Non-Negotiable",
      "The key to adoption lies in 'human-in-the-loop' communication. When AI is positioned as a background tool that helps their <i>existing physician</i> find the best options—rather than an autonomous, patient-facing decision-maker—opt-in rates increase by 42%.",
      "Sponsors must balance algorithmic efficiency with empathetic, transparent patient communications. The technology should empower the clinical site coordinators, not replace them."
    ]
  },
  {
    id: 'navigating-the-biosimilar-cliff',
    category: 'MARKET ACCESS',
    title: 'Navigating the 2025 biosimilar cliff',
    description: 'Payer and prescriber strategies as blockbuster biologics face generic competition.',
    gradientClass: 'from-rose-400 via-fuchsia-400 to-indigo-500',
    readTime: '8 min read',
    author: 'Market Access & Pricing Team',
    content: [
      "As several major biologic therapies lose exclusivity between 2024 and 2026, the market is bracing for a wave of biosimilar entries. But unlike small-molecule generics, biosimilar adoption is highly dependent on provider comfort, immunogenicity concerns, and complex payer formulary design.",
      "### Beyond the Discount",
      "Our recent advisory boards with P&T committee directors indicate that <b>cost alone will not drive automatic substitution.</b>",
      "> \"We expect a discount. But if your patient support hub is clunky, or your autoinjector is prone to misfires, we won't switch our stable patients over a 15% rebate difference.\"",
      "Payers are demanding robust real-world evidence of interchangeability, comprehensive patient support programs (PSPs), and flawless supply chain reliability.",
      "### Strategies for Entrants and Originators",
      "For <b>originator brands</b>, the strategy must pivot from clinical superiority to ecosystem value—highlighting supply chain reliability, established patient hubs, and unique delivery mechanisms that biosimilars cannot easily replicate.",
      "<b>Biosimilar entrants</b> must go beyond discounting, building localized contracting strategies that align with the specific incentives of Integrated Delivery Networks (IDNs) and specialized pharmacy benefit managers."
    ]
  },
  {
    id: 'the-rise-of-glp1-and-consumer-food-choices',
    category: 'CONSUMER BEHAVIOR',
    title: 'The GLP-1 ripple effect on consumer groceries',
    description: 'How weight-loss therapeutics are shifting basket dynamics in the CPG sector.',
    gradientClass: 'from-yellow-300 via-orange-400 to-red-500',
    readTime: '6 min read',
    author: 'CPG & Retail Intelligence',
    content: [
      "The explosive growth of GLP-1 receptor agonists (like Wegovy, Ozempic, and Zepbound) is creating unprecedented secondary effects across the consumer packaged goods (CPG) landscape. It's not just a pharmaceutical trend; it's a massive behavioral shift in the grocery aisles.",
      "### The New Basket Dynamics",
      "Our consumer panel data shows that households with an active GLP-1 prescription are radically altering their spending patterns. We observe a marked <b>decrease in high-sugar snacking occasions (down 22%)</b> and a corresponding <b>18% increase in high-protein, small-portion functional foods.</b>",
      "> \"I don't crave the same things anymore. When I do eat, I want it to be nutrient-dense because I get full so quickly. I've stopped buying family-size bags of anything.\"",
      "### How Brands Must Pivot",
      "Forward-looking CPG brands are already adapting their portfolios. The focus is shifting from generic 'diet' or 'low-calorie' messaging to <b>'nutrition-density' and muscle preservation.</b>",
      "Understanding these nuanced behavioral changes allows retailers to optimize shelf space (moving high-protein mini-meals to endcaps) and brands to innovate packaging sizes that align with the new, reduced-satiety profiles of their consumers."
    ]
  }
];
