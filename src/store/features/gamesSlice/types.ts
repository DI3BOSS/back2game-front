interface GameStructure {
  title: string;
  platform: string;
  genre: string;
  description: string;
  price: string;
  cover: string;
}

export default GameStructure;

export type GamesStructure = GameStructure[];

export interface GetGamesApiResponse {
  games: GamesStructure;
}
