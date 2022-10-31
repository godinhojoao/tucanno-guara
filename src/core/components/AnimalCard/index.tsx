import { useNavigate } from "react-router-dom";
import { Animal } from "../../interfaces/Aninmal";
import ArrowSvg from "./../../../assets/icons/arrow.svg";

import "./styles.scss";

const AnimalCard = (props: { animal: Animal }): JSX.Element => {
  const { animal } = props;
  const navigate = useNavigate();

  return (
    <div className="card">
      <img className="card__image" src={animal.picture} alt={animal.name} />
      <h3 className="card__title">{animal.name}</h3>
      <img className="card__arrow" src={ArrowSvg} onClick={(): void => navigate(animal.link)}/>
    </div>
  );
};

export { AnimalCard };
