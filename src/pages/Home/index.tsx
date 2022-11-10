import { useContext, useEffect } from "react";
import { animalsApi } from "../../core/api/Api";
import { AnimalCard } from "../../core/components/AnimalCard";
import { HeaderContext } from "../../core/context/HeaderContext";
import { HeaderProps } from "../../core/interfaces/props/HeaderProps";

import "./styles.scss";

const HomePage = (): JSX.Element => {
  const { handleChangeHeader } = useContext(HeaderContext);
  const homeHeaderParams: HeaderProps = {
    title: "Olá, seja bem vindo ao __",
    highlight: "Tucano-guará",
    subtitle:
      "Este é um site com fins educativos, sinta-se livre para explorar e aprender mais sobre os animais do Bioma Pampa.",
    linkToNavigate: {
      path: "/animais",
      title: "Ver todos os animais",
    },
  };
  const { data } = animalsApi.loadAnimals({ lastCount: 6 });

  useEffect(() => {
    handleChangeHeader(homeHeaderParams);
  }, []);

  return (
    <main className="home main">
      <div className="home__content main__content">
        {(data?.animals?.length && (
          <div className="home__content__animals">
            {data.animals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        )) ||
          ""}
      </div>
    </main>
  );
};

export { HomePage };
