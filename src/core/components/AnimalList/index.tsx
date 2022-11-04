import { useId } from "react";
import { useNavigate } from "react-router-dom";
import { AnimalsListProps } from "../../interfaces/AnimalsListProps";
import { AnimalCard } from "../AnimalCard";
import ChevronSvg from "./../../../assets/icons/chevron.svg";

import "./styles.scss";

const AnimalsList = (props: AnimalsListProps): JSX.Element => {
  const { animals, withArrow, title } = props;
  const navigate = useNavigate();

  return (
    <div className="animals-list">
      <h2 className="subtitle">{title}</h2>
      <div className={`animals-list__row ${withArrow ? "animals-list__row--with-limit" : ""}`}>
        {animals.map((animal) => (
          <AnimalCard key={useId()} animal={animal} />
        ))}
        {withArrow && (
          <img
            className="clickable-icon"
            src={ChevronSvg}
            onClick={(): void => navigate(`/animais/${animals[0].class}`)}
          />
        )}
      </div>
    </div>
  );
};

export { AnimalsList };
