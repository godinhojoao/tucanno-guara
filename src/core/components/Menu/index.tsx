import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeSvg from "./../../../assets/home.svg";
import AboutSvg from "./../../../assets/info.svg";
import AllAnimalsSvg from "./../../../assets/pets.svg";

import "./styles.scss";

const Menu = (): JSX.Element => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const navigate = useNavigate();

  const navigateAndCloseMenu = (path: string): void => {
    navigate(path);
    setIsMenuOpened(false);
  };

  return (
    <>
      <div className={`side-menu ${isMenuOpened ? "side-menu--opened" : ""}`}>
        <button
          className="side-menu__container"
          onClick={(): void => setIsMenuOpened(!isMenuOpened)}
        >
          <div className="side-menu__container__lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <nav
        className={`side-menu-content ${
          isMenuOpened ? "side-menu-content--opened" : ""
        }`}
      >
        <ul>
          <li
            className="subtitle"
            onClick={(): void => navigateAndCloseMenu("/")}
          >
            <img src={HomeSvg} />
            <span>Home</span>
          </li>
          <li
            className="subtitle"
            onClick={(): void => navigateAndCloseMenu("/sobre")}
          >
            <img src={AboutSvg} />
            <span>Sobre nós</span>
          </li>
          <li
            className="subtitle"
            onClick={(): void => navigateAndCloseMenu("/animais")}
          >
            <img src={AllAnimalsSvg} />
            <span>Todos animais</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Menu };
