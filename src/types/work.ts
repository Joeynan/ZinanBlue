export type ShapeType = 'circle' | 'square' | 'triangle' | 'rectangle';
export type ShapeColor = 'red' | 'yellow' | 'blue' | 'black' | 'white' | 'gray';
export type CategoryType =
  | 'hci-research'
  | 'hardware-design-development'
  | 'industrial-design'
  | 'other-design';

export interface Work {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryType: CategoryType;
  tags: string[];
  thumbnail: string;
  images: string[];
  year: number;
  client?: string;
  role?: string;
  technologies?: string[];
  shapeType?: ShapeType;
  accentColor?: ShapeColor;
  featured?: boolean;
  url?: string;
  github?: string;
  videoUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}
