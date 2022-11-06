import { useContext, useEffect } from "react";
import { animalsApi } from "../../core/api/Api";
import { AnimalsList } from "../../core/components/AnimalList";
import { HeaderContext } from "../../core/context/HeaderContext";
import { HeaderProps } from "../../core/interfaces/props/HeaderProps";

import "./styles.scss";

const AllAnimalsPage = (): JSX.Element => {
  const { handleChangeHeader } = useContext(HeaderContext);
  const allAnimalsHeaderParams: HeaderProps = {
    title: "Conheça os animais do pampa",
    subtitle:
      "Este é um site com fins educativos, sinta-se livre para explorar e aprender mais sobre os animais dos biomas brasileiros.",
  };
  const { data } = animalsApi.animalsByEachClass({ lastCount: 5 });

  useEffect(() => {
    handleChangeHeader(allAnimalsHeaderParams);
  }, []);

  return (
    <main className="all-animals main">
      <div className="all-animals__content main__content">
        <AnimalsList title="Aves" animals={data?.birds} withArrow={true} />
        <AnimalsList title="Anfíbios" animals={data?.amphibians} withArrow={true} />
        <AnimalsList title="Peixes" animals={data?.fishs} withArrow={true} />
        <AnimalsList title="Répteis" animals={data?.reptiles} withArrow={true} />
        <AnimalsList title="Mamíferos" animals={data?.mammals} withArrow={true} />
        <AnimalsList title="Invertebrados" animals={data?.invertebrates} withArrow={true} />
      </div>
    </main>
  );
};

export { AllAnimalsPage };
