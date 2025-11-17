

export interface Article {
  category: string;
  topic: 'sport' | 'special';
  title: string;
  slug: string;
  summary: string;
  content: string; // Full content for AI summary
  imageUrl: string;
  videoUrl?: string;
  audioUrl?: string;
  author: string;
  publishedAt: string; // ISO date string
  updatedAt?: string; // ISO date string
  views?: number;
  likes?: number;
  ogTitle?: string;
  ogDescription?: string;
  ogImageUrl?: string;
  hashtags?: string[];
  isFeatured?: boolean;
}

export interface Comment {
  id: string;
  articleId: string;
  author: string;
  text: string;
  timestamp: string;
}