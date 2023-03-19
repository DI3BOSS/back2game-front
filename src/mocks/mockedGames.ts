import GameStructure from "../store/features/gamesSlice/types";

const mockedGames: GameStructure[] = [
  {
    id: "1",
    title: "Mario the Codemaster",
    platform: "PlayStation 5",
    genre: "RPG",
    description: "short description.",
    price: "69.95",
    cover: "image.jpg",
    owner: "di3boss",
  },
  {
    id: "2",
    title: "Suicide Squad: Kill the Justice League",
    platform: "PlayStation 5",
    genre: "Action",
    description: "short description",
    price: "54.95",
    cover: "image2.jpg",
    owner: "di3boss",
  },
];

export default mockedGames;
