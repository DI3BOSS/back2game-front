import Card from "../Card/Card";
import { ReactComponent as ViewIcon } from "../../assets/icons/view.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import CardListStyled from "./CardListStyled";
import { GamesStructure } from "../../store/features/gamesSlice/types";
interface CardListProps {
  games: GamesStructure;
}

const CardList = ({ games }: CardListProps): JSX.Element => {
  return (
    <>
      <h2 className="shown-games">Showing {games.length} games</h2>
      <CardListStyled>
        {games.map((game) => (
          <li key={game.id} className="card">
            <Card
              game={game}
              deleteButton={<DeleteIcon />}
              editButton={<EditIcon />}
              viewButton={<ViewIcon />}
            />
          </li>
        ))}
      </CardListStyled>
    </>
  );
};

export default CardList;
