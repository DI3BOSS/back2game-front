import { useEffect } from "react";
import CardList from "../../components/CardsList/CardList";
import useGames from "../../hooks/useGames/useGames";
import { useAppSelector } from "../../store/hooks";

const HomePage = (): JSX.Element => {
  const { getGames } = useGames();
  useEffect(() => {
    getGames();
  }, [getGames]);

  const gameCards = useAppSelector((state) => state.games);

  return <CardList games={gameCards} />;
};

export default HomePage;
