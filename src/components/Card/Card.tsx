import CardStyled from "./CardStyled";

interface GameStructure {
  title: string;
  platform: string;
  genre: string;
  description: string;
  price: string;
  cover: string;
}

interface CardProps {
  game: GameStructure;
  viewButton: JSX.Element;
  deleteButton?: JSX.Element;
  editButton?: JSX.Element;
}

const Card = ({
  game: { cover, title, platform, genre, price },
  viewButton,
  deleteButton,
  editButton,
}: CardProps): JSX.Element => {
  return (
    <CardStyled>
      <div className="card__image">
        <img src={cover} alt={title}></img>
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
            {editButton} {deleteButton} {viewButton}
          </div>
        </div>
      </div>
    </CardStyled>
  );
};
export default Card;
