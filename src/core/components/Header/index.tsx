import { Link } from "react-router-dom";
import { formatAnimalWeight } from "../../shared/formatAnimalWeight";
import { getCorrectFoodTypeName } from "../../shared/getCorrectFoodTypeName";
import { formatAnimalLifetime } from "../../shared/formatAnimalLifetime";
import { HeaderProps } from "../../interfaces/HeaderProps";

import "./styles.scss";

const Header = (props: HeaderProps): JSX.Element => {
  const { title, subtitle, highlight, linkToNavigate, animal } = props;
  const [initialTitle, finalTitle] = title.split("{{highlight}}");

  return (
    <header className="header">
      {(highlight && (
        <h1 className="header__title">
          {initialTitle}
          <span className="header__title__highlight">{highlight}</span>
          {finalTitle}
        </h1>
      )) || <h1 className="header__title">{title}</h1>}
      <footer className="header__footer">
        {subtitle && <p className="header__footer__paragraph">{subtitle}</p>}
        {animal && (
          <>
            {animal.mediumWeightKg && (
              <div className="header__footer__animal-info">
                <span>{formatAnimalWeight(animal.mediumWeightKg)}</span>
                <span>Peso</span>
              </div>
            )}
            {animal.lifetimeInYears && (
              <div className="header__footer__animal-info">
                <span>{formatAnimalLifetime(animal.lifetimeInYears)}</span>
                <span>Expectativa de vida</span>
              </div>
            )}
            {animal.foodType && (
              <div className="header__footer__animal-info">
                <span>{getCorrectFoodTypeName(animal.foodType)}</span>
                <span>Alimentação</span>
              </div>
            )}
          </>
        )}

        {linkToNavigate && (
          <Link to={linkToNavigate.path}>{linkToNavigate.title}</Link>
        )}
      </footer>
    </header>
  );
};

export { Header };
