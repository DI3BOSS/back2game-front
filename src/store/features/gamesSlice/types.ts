interface GameStructure {
  id: string;
  title: string;
  platform: string;
  genre: string;
  description: string;
  price: string;
  cover: string;
  owner: string;
}

export default GameStructure;

export type GamesStructure = GameStructure[];
export interface GamesApiResponse {
  games: GamesStructure;
}
