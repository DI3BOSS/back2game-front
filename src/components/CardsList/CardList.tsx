import { useAppSelector } from "../../store/hooks";
import Card from "../Card/Card";
import { ReactComponent as ViewIcon } from "../../assets/icons/view.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import useGames from "../../hooks/useGames/useGames";
import { useEffect } from "react";
import CardListStyled from "./CardListStyled";

const CardList = (): JSX.Element => {
  const { getGames } = useGames();
  useEffect(() => {
    getGames();
  }, [getGames]);

  const gameCards = useAppSelector((state) => state.games);

  return (
    <>
      <CardListStyled>
        {gameCards.map((game, index) => (
          <li key={index}>
            <Card
              game={game}
              deleteButton={<DeleteIcon />}
              editButton={<EditIcon />}
              viewButton={<ViewIcon />}
            />
          </li>
        ))}
        <h2 className="shown-games">Showing {gameCards.length} games</h2>
      </CardListStyled>
    </>
  );
};

export default CardList;
