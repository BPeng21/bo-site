export interface ContentBlock {
  id: number;
  type: 'text' | 'image';
  value: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: ContentBlock[];
}
