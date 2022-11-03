import { useContext, useEffect } from "react";
import { AnimalsList } from "../../core/components/AnimalList";
import { HeaderContext } from "../../core/context/HeaderContext";
import { Animal } from "../../core/interfaces/Aninmal";

import "./styles.scss";

const AllAnimals = (): JSX.Element => {
  const { handleChangeHeader } = useContext(HeaderContext);
  const homeHeaderParams = {
    title: "Conheça os animais do pampa",
    subtitle:
      "Este é um site com fins educativos, sinta-se livre para explorar e aprender mais sobre os animais dos biomas brasileiros.",
  };
  const birds: Animal[] = [
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "/todos-animais",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
  ];
  const amphibians: Animal[] = [
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "/todos-animais",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
  ];
  const fishs: Animal[] = [
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "/todos-animais",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
  ];
  const reptiles: Animal[] = [
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "/todos-animais",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
  ];
  const mammals: Animal[] = [
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "/todos-animais",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
  ];
  const invertebrates: Animal[] = [
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "/todos-animais",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
    {
      picture:
        "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
      name: "Sabiá-do-campo",
      class: "aves",
      link: "###",
    },
  ];

  useEffect(() => {
    handleChangeHeader(homeHeaderParams);
  }, []);

  return (
    <main className="all-animals main">
      <div className="all-animals__content main__content">
        <AnimalsList title="Aves" animals={birds} withArrow={true} />
        <AnimalsList title="Anfíbios" animals={amphibians} withArrow={true} />
        <AnimalsList title="Peixes" animals={fishs} withArrow={true} />
        <AnimalsList title="Répteis" animals={reptiles} withArrow={true} />
        <AnimalsList title="Mamíferos" animals={mammals} withArrow={true} />
        <AnimalsList title="Invertebrados" animals={invertebrates} withArrow={true} />
      </div>
    </main>
  );
};

export { AllAnimals };
