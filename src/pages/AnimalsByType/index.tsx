import { useContext, useEffect, useId } from "react";
import { AnimalCard } from "../../core/components/AnimalCard";
import { HeaderContext } from "../../core/context/HeaderContext";
import { Animal } from "../../core/interfaces/Aninmal";

import "./styles.scss";

const AnimalsByType = (): JSX.Element => {
  const { handleChangeHeader } = useContext(HeaderContext);
  const homeHeaderParams = {
    title: `Conheça --type-- do pampa`,
    subtitle: "Este é um site com fins educativos, sinta-se livre para explorar e aprender mais sobre os animais dos biomas brasileiros.",
  };
  const animals: Animal[] = [
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      link: "/todos-animais",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      link: "###",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      link: "###",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      link: "###",
    },
  ];

  useEffect(() => {
    handleChangeHeader(homeHeaderParams);
  }, []);

  return (
    <main className="animals-by-type main">
      <div className="animals-by-type__content main__content">
        <div className="animals-by-type__content__type">
          <h1 className="subtitle">type here</h1>
          <div className="animals-by-type__content__type__row">
            {animals.map((animal) => (
              <AnimalCard key={useId()} animal={animal} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export { AnimalsByType };
