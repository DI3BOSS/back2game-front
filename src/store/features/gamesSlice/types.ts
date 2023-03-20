export type GamesStructure = GameStructure[];
export interface GamesApiResponse {
  games: GamesStructure;
}
export interface GameStructure extends InitialGameStructure {
  id: string;
  owner: string;
}

export interface InitialGameStructure {
  title: string;
  platform: string;
  genre: string;
  description: string;
  price: string;
  cover: string;
}
