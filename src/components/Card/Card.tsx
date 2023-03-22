import { useState } from "react";
import useGames from "../../hooks/useGames/useGames";
import { GameStructure } from "../../store/features/gamesSlice/types";
import { useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import CardStyled from "./CardStyled";

interface CardProps {
  game: GameStructure;
  viewButton: JSX.Element;
  hideButton?: JSX.Element;
  deleteButton?: JSX.Element;
  editButton?: JSX.Element;
}

const Card = ({
  game: { id, cover, title, platform, genre, price, owner, description },
  viewButton,
  hideButton,
  deleteButton,
  editButton,
}: CardProps): JSX.Element => {
  const { deleteGame } = useGames();

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleOpen = () => {
    setIsDescriptionOpen(true);
  };

  const handleClose = () => {
    setIsDescriptionOpen(false);
  };

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
        {isDescriptionOpen && <p>{description}</p>}
        <div className="game-info__price-actions">
          <div className="game-info__price price">
            <span className="price__title">Price</span>&nbsp;{price}&nbsp;€
          </div>
          <div className="game-info__actions">
            {!isDescriptionOpen && (
              <Button
                icon={viewButton}
                ariaLabel="view description"
                onClick={handleOpen}
              />
            )}
            {isDescriptionOpen && (
              <Button
                icon={hideButton}
                ariaLabel="hide description"
                onClick={handleClose}
              />
            )}
            {owner === username && (
              <>
                <Button
                  icon={deleteButton}
                  onClick={() => deleteGame(id)}
                  ariaLabel="delete game"
                />
                <Button icon={editButton} ariaLabel="edit game" />
              </>
            )}
          </div>
        </div>
      </div>
    </CardStyled>
  );
};
export default Card;
