import { useNavigate } from "react-router-dom";
import { Animal } from "../../interfaces/Animal";
import ArrowSvg from "./../../../assets/arrow.svg";

import "./styles.scss";

const AnimalCard = (props: { animal: Animal }): JSX.Element => {
  const { animal } = props;
  const navigate = useNavigate();

  return (
    <div className="card">
      <img className="card__image" src={animal.imageUrl} alt={animal.popularName} />
      <h3 className="card__title">{animal.popularName}</h3>
      <img className="card__arrow" src={ArrowSvg} onClick={(): void => navigate(`/animal/${animal.id}`)}/>
    </div>
  );
};

export { AnimalCard };
