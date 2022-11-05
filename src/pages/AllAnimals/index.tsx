import { useContext, useEffect } from "react";
import { AnimalsList } from "../../core/components/AnimalList";
import { HeaderContext } from "../../core/context/HeaderContext";
import { Animal } from "../../core/interfaces/Animal";
import { HeaderProps } from "../../core/interfaces/props/HeaderProps";

import "./styles.scss";

const AllAnimalsPage = (): JSX.Element => {
  const { handleChangeHeader } = useContext(HeaderContext);
  const allAnimalsHeaderParams: HeaderProps = {
    title: "Conheça os animais do pampa",
    subtitle:
      "Este é um site com fins educativos, sinta-se livre para explorar e aprender mais sobre os animais dos biomas brasileiros.",
  };
  const birds: Animal[] = [
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
  const amphibians: Animal[] = [
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
  const fishs: Animal[] = [
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
  const reptiles: Animal[] = [
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
  const mammals: Animal[] = [
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
  const invertebrates: Animal[] = [
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
    handleChangeHeader(allAnimalsHeaderParams);
  }, []);

  return (
    <main className="all-animals main">
      <div className="all-animals__content main__content">
        <AnimalsList title="Aves" animals={birds} withArrow={true} />
        <AnimalsList title="Anfíbios" animals={amphibians} withArrow={true} />
        <AnimalsList title="Peixes" animals={fishs} withArrow={true} />
        <AnimalsList title="Répteis" animals={reptiles} withArrow={true} />
        <AnimalsList title="Mamíferos" animals={mammals} withArrow={true} />
        <AnimalsList
          title="Invertebrados"
          animals={invertebrates}
          withArrow={true}
        />
      </div>
    </main>
  );
};

export { AllAnimalsPage };
