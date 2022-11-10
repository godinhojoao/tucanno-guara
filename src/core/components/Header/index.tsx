import { Link } from "react-router-dom";
import { HeaderProps } from "../../interfaces/props/HeaderProps";

import "./styles.scss";

const Header = (props: HeaderProps): JSX.Element => {
  const { title, subtitle, highlight, linkToNavigate } = props;
  const [initialTitle, finalTitle] = title.split("__");

  return (
    <header className="header invisible-sm">
      {(highlight && (
        <h1 className="header__title">
          {initialTitle}
          <span className="header__title__highlight">{highlight}</span>
          {finalTitle}
        </h1>
      )) || <h1 className="header__title">{title}</h1>}
      <footer className="header__footer">
        {subtitle && <p className="header__footer__paragraph">{subtitle}</p>}

        {linkToNavigate && (
          <Link to={linkToNavigate.path}>{linkToNavigate.title}</Link>
        )}
      </footer>
    </header>
  );
};

export { Header };
