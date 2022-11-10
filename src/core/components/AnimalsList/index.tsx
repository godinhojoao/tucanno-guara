import { useNavigate } from "react-router-dom";
import { AnimalsListProps } from "../../interfaces/props/AnimalsListProps";
import { AnimalCard } from "../AnimalCard";
import ChevronSvg from "./../../../assets/chevron.svg";

import "./styles.scss";

const AnimalsList = (props: AnimalsListProps): JSX.Element => {
  const { animals, withArrow, title } = props;
  const navigate = useNavigate();

  return (
    <>
      {(animals?.length && (
        <div className="animals-list">
          <h2 className="animals-list__title subtitle">
            {title}
            {withArrow && animals?.length && (
              <img
                className="animals-list__title__navigation-icon clickable-icon"
                src={ChevronSvg}
                onClick={(): void => navigate(`/animais/${animals[0].class}`)}
              />
            )}
          </h2>
          <div
            className={`animals-list__row ${
              withArrow ? "animals-list__row--with-limit" : ""
            }`}
          >
            {animals?.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
            {withArrow && animals?.length && (
              <img
                className="animals-list__row__icon clickable-icon"
                src={ChevronSvg}
                onClick={(): void => navigate(`/animais/${animals[0].class}`)}
              />
            )}
          </div>
        </div>
      )) ||
        ""}
    </>
  );
};

export { AnimalsList };
