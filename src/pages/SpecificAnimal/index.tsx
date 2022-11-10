import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HeaderContext } from "../../core/context/HeaderContext";
import { formatAnimalBiomes } from "../../core/shared/formatAnimalBiomes";
import { animalsApi } from "../../core/api/Api";
import { HeaderProps } from "../../core/interfaces/props/HeaderProps";

import "./styles.scss";
import { getCorrectExtinctionLevel } from "../../core/shared/getCorrectExtinctionLevel";
import { formatAnimalWeight } from "../../core/shared/formatAnimalWeight";
import { formatAnimalLifetime } from "../../core/shared/formatAnimalLifetime";
import { getCorrectFoodTypeName } from "../../core/shared/getCorrectFoodTypeName";

const SpecificAnimalPage = (): JSX.Element => {
  const params = useParams();
  const { handleChangeHeader } = useContext(HeaderContext);
  const { data } = animalsApi.specificAnimalById(params?.id || "");

  useEffect(() => {
    const rootElement = document.querySelector("#root");
    rootElement?.classList.add("tucano-image");

    const specificAnimalHeaderParams: HeaderProps = {
      title: "Conheça um pouco mais sobre o(a) __",
      highlight: data?.animal?.popularName
    };
    handleChangeHeader(specificAnimalHeaderParams);

    return (): void => rootElement?.classList.remove("tucano-image");
  }, [data]);

  return (
    <main className="all-animals main">
      <div className="all-animals__content main__content">
        {(data?.animal && (
          <>
            <a href={data.animal.imageUrl} target="__blank">
              <img
                className="all-animals__content__image"
                src={data.animal.imageUrl}
                alt={data.animal.popularName}
              />
            </a>
            <footer className="all-animals__content__footer">
              {data.animal && (
                <>
                  {data.animal.mediumWeightKg && (
                    <div className="all-animals__content__footer__animal-info">
                      <span>
                        {formatAnimalWeight(data.animal.mediumWeightKg)}
                      </span>
                      <span>Peso</span>
                    </div>
                  )}
                  {data.animal.lifetimeInYears && (
                    <div className="all-animals__content__footer__animal-info">
                      <span>
                        {formatAnimalLifetime(data.animal.lifetimeInYears)}
                      </span>
                      <span>Expectativa de vida</span>
                    </div>
                  )}
                  {data.animal.foodType && (
                    <div className="all-animals__content__footer__animal-info">
                      <span>
                        {getCorrectFoodTypeName(data.animal.foodType)}
                      </span>
                      <span>Alimentação</span>
                    </div>
                  )}
                </>
              )}
            </footer>
            <p>
              <strong>Nome científico</strong>:
              <i>{data.animal.scientificName}</i>
            </p>
            <p>
              <strong>Ameaça de extinção</strong>:
              {getCorrectExtinctionLevel(data.animal.extinctionLevel)}
            </p>
            <p>
              <strong>Características</strong>: {data.animal.generalDescription}
            </p>
            <p>
              <strong>Alimentação</strong>: {data.animal.foodDescription}
            </p>
            <p>
              <strong>Reprodução</strong>: {data.animal.reprodutionDescription}
            </p>
            <p>
              <strong>Localização</strong>: {data.animal.locationDescription}
            </p>
            {(data.animal.biomes?.length && (
              <p>
                <strong>Biomas:</strong>:
                {formatAnimalBiomes(data.animal.biomes)}
              </p>
            )) ||
              ""}
            <p>
              <strong>Quem pesquisou o animal:</strong>
              {data.animal.whoSearched}
            </p>
          </>
        )) ||
          ""}
      </div>
    </main>
  );
};

export { SpecificAnimalPage };
