export type NavigationSection = 
  | 'home' 
  | 'solutions' 
  | 'approach' 
  | 'industries' 
  | 'insights' 
  | 'about' 
  | 'contact';

export interface SolutionItem {
  id: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  title: string;
  description: string;
  fullDetails?: {
    overview: string;
    keyMethods: string[];
    typicalTimeline: string;
    sampleQuestions: string[];
  };
}

export interface InsightArticle {
  id: string;
  category: 'METHODOLOGY' | 'CATEGORY TRENDS' | 'CASE STUDY' | 'INNOVATION' | 'MARKET ACCESS' | 'CONSUMER BEHAVIOR';
  title: string;
  description: string;
  gradientClass: string;
  readTime: string;
  author: string;
  content: string[];
}

export interface IndustryCategory {
  id: string;
  name: string;
  description: string;
  recentQuestions: string[];
}
