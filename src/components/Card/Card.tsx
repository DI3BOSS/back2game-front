import useGames from "../../hooks/useGames/useGames";
import GameStructure from "../../store/features/gamesSlice/types";
import { useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import CardStyled from "./CardStyled";

interface CardProps {
  game: GameStructure;
  viewButton: JSX.Element;
  deleteButton?: JSX.Element;
  editButton?: JSX.Element;
}

const Card = ({
  game: { id, cover, title, platform, genre, price, owner },
  viewButton,
  deleteButton,
  editButton,
}: CardProps): JSX.Element => {
  const { deleteGame } = useGames();

  const { username } = useAppSelector((state) => state.user);

  return (
    <CardStyled>
      <div className="card__image">
        <img src={cover} alt={title} className="card__image-cover"></img>
      </div>
      <div
        className={`card__info game-info ${
          owner === username && "card__info--owned"
        }`}
      >
        <h2 className="game-info__title">{title}</h2>
        <span className="game-info__line"></span>
        <span className="game-info__platform-genre">
          {platform} | {genre}
        </span>
        <div className="game-info__price-actions">
          <div className="game-info__price price">
            <span className="price__title">Price</span>&nbsp;{price}&nbsp;€
          </div>
          <div className="game-info__actions">
            <Button icon={viewButton} />
            {owner === username && (
              <Button
                icon={deleteButton}
                onClick={() => deleteGame(id)}
                data-testid
              />
            )}
            <Button icon={editButton} />
          </div>
        </div>
      </div>
    </CardStyled>
  );
};
export default Card;
