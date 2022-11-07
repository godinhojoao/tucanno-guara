import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HeaderContext } from "../../core/context/HeaderContext";
import { animalsApi } from "../../core/api/Api";
import { HeaderProps } from "../../core/interfaces/props/HeaderProps";

import "./styles.scss";

const SpecificAnimalPage = (): JSX.Element => {
  const params = useParams();
  const { handleChangeHeader } = useContext(HeaderContext);
  const { data } = animalsApi.specificAnimalById(params?.id || "");

  useEffect(() => {
    const rootElement = document.querySelector("#root");
    rootElement?.classList.add("tucano-image");

    const specificAnimalHeaderParams: HeaderProps = {
      title: "Conheça um pouco mais sobre o {{highlight}}",
      highlight: data?.animal?.popularName,
      animal: data?.animal,
    };
    handleChangeHeader(specificAnimalHeaderParams);

    return (): void => rootElement?.classList.remove("tucano-image");
  }, [data]);

  return (
    <main className="all-animals main">
      <div className="all-animals__content main__content">
        {data?.animal && (
          <>
            <img
              className="all-animals__content__image"
              src={data.animal.imageUrl}
              alt={data.animal.popularName}
            />
            <p><strong>Nome científico</strong>: {data.animal.scientificName}</p>
            <p><strong>Ameaça de extinção</strong>: {data.animal.isInExtinction ? "Sim" : "Não"}</p>
            <p><strong>Características</strong>: {data.animal.generalDescription}</p>
            <p><strong>Alimentação</strong>: {data.animal.foodDescription}</p>
            <p><strong>Reprodução</strong>: {data.animal.reprodutionDescription}</p>
            <p><strong>Localização</strong>: {data.animal.locationDescription}</p>
          </>
        ) || ''}
      </div>
    </main>
  );
};

export { SpecificAnimalPage };
