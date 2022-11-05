import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimalsList } from "../../core/components/AnimalList";
import { HeaderContext } from "../../core/context/HeaderContext";
import { getCorrectClassName } from "../../core/shared/getCorrectClassName";
import { Animal } from "../../core/interfaces/Animal";
import { HeaderProps } from "../../core/interfaces/props/HeaderProps";

import "./styles.scss";

const AnimalsByClassPage = (): JSX.Element => {
  const params = useParams();
  const navigate = useNavigate();
  const currentClassName = getCorrectClassName(params.class || "");
  const animalsByClassHeaderParams: HeaderProps = {
    title: "Conheça {{highlight}} do pampa",
    highlight: currentClassName,
    subtitle:
      "Este é um site com fins educativos, sinta-se livre para explorar e aprender mais sobre os animais dos biomas brasileiros.",
  };
  const { handleChangeHeader } = useContext(HeaderContext);
  const animals: Animal[] = [
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      id: 1,
      class: "aves"
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      id: 1,
      class: "aves"
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      id: 1,
      class: "aves"
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      id: 1,
      class: "aves"
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      id: 1,
      class: "aves"
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      id: 1,
      class: "aves"
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      id: 1,
      class: "aves"
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      id: 1,
      class: "aves"
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      id: 1,
      class: "aves"
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      id: 1,
      class: "aves"
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      id: 1,
      class: "aves"
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      id: 1,
      class: "aves"
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      id: 1,
      class: "aves"
    },
    {
      imageUrl:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      popularName: "Sabiá-do-campo",
      id: 1,
      class: "aves"
    },
  ];

  useEffect(() => {
    if (!currentClassName) {
      return navigate("/");
    }
    handleChangeHeader(animalsByClassHeaderParams);
  }, []);

  return (
    <main className="animals-by-class main">
      <div className="animals-by-class__content main__content">
        <AnimalsList title={currentClassName} animals={animals} />
      </div>
    </main>
  );
};

export { AnimalsByClassPage };
