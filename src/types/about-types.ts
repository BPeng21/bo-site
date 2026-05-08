export type WheelState = 'ready' | 'pending' | 'spinning';

export interface HobbyInfo {
  id: string;
  title: string;
  descriptions: string[];
  image?: string;
}

export interface AboutPageTypes {
  hobbiesInfo: HobbyInfo[];
}
