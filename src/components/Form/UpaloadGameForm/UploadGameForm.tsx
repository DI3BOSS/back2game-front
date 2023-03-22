import { SyntheticEvent, useState } from "react";
import { ReactComponent as Icon } from "../../../assets/icons/rocket.svg";
import Button from "../../Button/Button";
import FormStyled from "../FormStyled";
import useGames from "../../../hooks/useGames/useGames";
import { InitialGameStructure } from "../../../store/features/gamesSlice/types";

const UploadGameFrom = (): JSX.Element => {
  const { createGame } = useGames();

  const initialNewGameState: InitialGameStructure = {
    title: "",
    platform: "",
    genre: "",
    description: "",
    price: "",
    cover: "",
    owner: "",
  };

  const [formData, setFormData] = useState(initialNewGameState);

  const handleChangeEvent = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event: SyntheticEvent) => {
    event.preventDefault();

    await createGame(formData);
    setFormData(initialNewGameState);
  };

  return (
    <FormStyled onSubmit={handleSubmitForm} className="form">
      <div className="upload-form-type">
        <label htmlFor="title" className="form__field">
          <input
            onChange={handleChangeEvent}
            value={formData.title}
            id="title"
            type="text"
            name="title"
            className="form__input"
            placeholder="Game title"
            autoFocus
            required
          ></input>
        </label>
        <label htmlFor="platform" className="form__field">
          <input
            onChange={handleChangeEvent}
            value={formData.platform}
            id="platform"
            type="text"
            name="platform"
            className="form__input"
            placeholder="Platform"
            required
          ></input>
        </label>
        <label htmlFor="genre" className="form__field">
          <input
            onChange={handleChangeEvent}
            value={formData.genre}
            id="genre"
            type="text"
            name="genre"
            className="form__input"
            placeholder="Genre"
            required
          ></input>
        </label>
        <label htmlFor="description" className="form__field">
          <input
            onChange={handleChangeEvent}
            value={formData.description}
            id="description"
            name="description"
            className="form__input"
            placeholder="Description"
            required
          ></input>
        </label>
        <label htmlFor="price" className="form__field">
          <input
            onChange={handleChangeEvent}
            value={formData.price}
            id="price"
            type="text"
            name="price"
            className="form__input"
            placeholder="Price (with taxes)"
            required
          ></input>
        </label>
        <label htmlFor="cover" className="form__field">
          <input
            onChange={handleChangeEvent}
            value={formData.cover}
            id="cover"
            type="text"
            name="cover"
            className="form__input"
            placeholder="Cover image (url)"
            required
          ></input>
        </label>

        <Button text="Upload Game!" icon={<Icon />} className={"submit"} />
      </div>
    </FormStyled>
  );
};
export default UploadGameFrom;
