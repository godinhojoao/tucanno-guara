// import { useQuery } from "@apollo/client";
// import { GET_ANIMALS } from "../../core/queries";
import { useContext, useEffect, useId } from "react";
import { AnimalCard } from "../../core/components/AnimalCard";
import { HeaderContext } from "../../core/context/HeaderContext";
import { Animal } from "../../core/interfaces/Animal";
import { HeaderProps } from "../../core/interfaces/props/HeaderProps";

import "./styles.scss";

const HomePage = (): JSX.Element => {
  const { handleChangeHeader } = useContext(HeaderContext);
  const homeHeaderParams: HeaderProps = {
    title: "Olá, seja bem vindo ao {{highlight}}",
    highlight: 'Tucano-guará',
    subtitle:
      "Este é um site com fins educativos, sinta-se livre para explorar e aprender mais sobre os animais dos biomas brasileiros.",
    linkToNavigate: {
      path: "/animais",
      title: "Ver todos os animais",
    },
  };

  useEffect(() => {
    handleChangeHeader(homeHeaderParams);
  }, []);

  // const { loading, error, data } = useQuery(GET_ANIMALS);
  const sixAnimals: Animal[] = [
    {
      imageUrl: "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      class: "aves",
      id: 1
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      class: "aves",
      id: 1
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      class: "aves",
      id: 1
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      class: "aves",
      id: 1
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      class: "aves",
      id: 1
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      class: "aves",
      id: 1
    },
  ];

  return (
    <main className="home main">
      <div className="home__content main__content">
        <div className="home__content__animals">
          {sixAnimals.splice(0, 3).map((animal) => (
            <AnimalCard key={useId()} animal={animal} />
          ))}
        </div>
        <div className="home__content__animals">
          {sixAnimals.splice(0, 3).map((animal) => (
            <AnimalCard key={useId()} animal={animal} />
          ))}
        </div>
      </div>
    </main>
  );
};

export { HomePage };
