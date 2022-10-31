import { Link } from "react-router-dom";
import { HeaderProps } from "../../interfaces/HeaderProps";

import "./styles.scss";

const Header = (props: HeaderProps): JSX.Element => {
  const { title, subtitle, linkToNavigate } = props;

  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <footer className="header__footer">
        <p className="header__footer__paragraph">{subtitle}</p>

        {linkToNavigate && <Link to={linkToNavigate.path}>{linkToNavigate.title}</Link>}
      </footer>
    </header>
  );
};

export { Header };
