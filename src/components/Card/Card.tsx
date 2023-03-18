import useGames from "../../hooks/useGames/useGames";
import GameStructure from "../../store/features/gamesSlice/types";
import Button from "../Button/Button";
import CardStyled from "./CardStyled";

interface CardProps {
  game: GameStructure;
  viewButton: JSX.Element;
  deleteButton?: JSX.Element;
  editButton?: JSX.Element;
}

const Card = ({
  game: { id, cover, title, platform, genre, price },
  viewButton,
  deleteButton,
  editButton,
}: CardProps): JSX.Element => {
  const { deleteGame } = useGames();

  return (
    <CardStyled>
      <div className="card__image">
        <img src={cover} alt={title} className="card__image-cover"></img>
      </div>
      <div className="card__info game-info">
        <h2 className="game-info__title">{title}</h2>
        <span className="game-info__line"></span>
        <span className="game-info__platform-genre">
          {platform} | {genre}
        </span>
        <div className="game-info__price-actions">
          <div className="game-info__price price">
            <span className="price__title">Price</span>&nbsp;{price}
          </div>
          <div className="game-info__actions">
            {editButton}{" "}
            <Button icon={deleteButton} onClick={() => deleteGame(id)} />
            {viewButton}
          </div>
        </div>
      </div>
    </CardStyled>
  );
};
export default Card;
