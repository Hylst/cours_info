
export interface ComparisonItem {
  feature: string;
  pro: string;
  con: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullContent?: DetailContent;
}

export interface DetailContent {
  analogy: string;
  scientificExplanation: string;
  scenario: string;
  actionableTip: string;
  imagePrompt: string;
}

export interface ActeStep {
  step: string;
  title: string;
  action: string;
  desc: string;
  icon: any;
  science: string;
  detailedExample: string;
}
