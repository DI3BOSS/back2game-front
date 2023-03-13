import CardComponentStyled from "./CardComponentStyled";

interface CardComponentProps {
  image: string;
  title: string;
  platform: string;
  genre: string;
  pricTitle: string;
  price: string;
  editButton?: JSX.Element;
  deleteButton?: JSX.Element;
  viewButton: JSX.Element;
}

const CardComponent = ({
  image,
  title,
  platform,
  genre,
  pricTitle,
  price,
  viewButton,
  deleteButton,
  editButton,
}: CardComponentProps): JSX.Element => {
  return (
    <CardComponentStyled>
      <div className="card__image">
        <img src={image} alt={title}></img>
      </div>
      <div className="card__info game-info">
        <h2 className="game-info__title">{title}</h2>
        <span className="game-info__line"></span>
        <span className="game-info__platform-genre">
          {platform} | {genre}
        </span>
        <div className="game-info__price-actions">
          <div className="game-info__price price">
            <span className="price__title">{pricTitle}</span>
            <span className="price__price-with-vat">{price}</span>
          </div>
          <div className="game-info__actions">
            {editButton} {deleteButton} {viewButton}
          </div>
        </div>
      </div>
    </CardComponentStyled>
  );
};
export default CardComponent;
