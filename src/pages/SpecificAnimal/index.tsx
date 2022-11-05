import { useContext, useEffect } from "react";
import { HeaderContext } from "../../core/context/HeaderContext";
import { SpecificAnimal } from "../../core/interfaces/SpecificAnimal";
import { HeaderProps } from "../../core/interfaces/props/HeaderProps";

import "./styles.scss";

const SpecificAnimalPage = (): JSX.Element => {
  const { handleChangeHeader } = useContext(HeaderContext);
  const animal: SpecificAnimal = {
    imageUrl:
      "https://passarinhando.com.br/media/k2/items/cache/f8ea1c7aff521bedaac5eab4cbe3ce1e_XL.jpg",
    popularName: "Sabiá-do-campo",
    id: 1,
    class: "aves",
    mediumWeightKg: 0.062,
    lifetimeInYears: 2,
    foodType: "herbivoro",
    scientificName: "Mimus saturnius",
    isInExtinction: false,
    generalDescription: `Mede entre 23,5 e 26 centímetros de comprimento
    e pesa entre 55 e 73 gramas. Possui uma coloração cinzenta no
    dorso, alto da cabeça, asas e cauda. O peito e o ventre são branco-
    amarelados ou arroxeados pela terra. Há uma listra superciliar
    branca, destacada pela faixa negra na altura dos olhos. Os olhos
    dos adultos são amarelados e marrom escuros nas aves juvenis, as
    quais também possuem o peito rajado de cinza escuro. Possui a
    cauda comprida com as pontas de cor branca.`,
    foodDescription:
      "São onívoros, alimentam-se principalmente de invertebrados e frutos.",
    reprodutionDescription: `A fêmea põe de 3 a 4 ovos e, às vezes, choca ovos de
    outros pássaros. O casal é auxiliado para a alimentação e proteção
    dos filhotes. Os ovos eclodem após 12 ou 14 dias e os filhotes
    abandonam o ninho com 11 a 14 dias de vida.`,
    locationDescription: `É encontrado em regiões campestres do baixo
    Amazonas, e nas regiões Nordeste, Sudeste, Centro-oeste e Sul do
    Brasil, além do Uruguai, Paraguai, Argentina e Bolívia.`,
  };
  const specificAnimalHeaderParams: HeaderProps = {
    title: "Conheça um pouco mais sobre o {{highlight}}",
    highlight: animal.popularName,
    animal: animal
  };
  const rootElement = document.querySelector('#root');
  rootElement?.classList.add('tucano-image');

  useEffect(() => {
    handleChangeHeader(specificAnimalHeaderParams);
    return (): void => rootElement?.classList.remove('tucano-image');
  }, []);

  return (
    <main className="all-animals main">
      <div className="all-animals__content main__content">
        <img className="all-animals__content__image" src={animal.imageUrl} alt={animal.popularName} />
        <p> <strong>Nome científico</strong>: {animal.scientificName}</p>
        <p> <strong>Ameaça de extinção</strong>: {animal.isInExtinction ? 'Sim' : 'Não'}</p>
        <p> <strong>Características</strong>: {animal.generalDescription}</p>
        <p> <strong>Alimentação</strong>: {animal.foodDescription}</p>
        <p> <strong>Reprodução</strong>: {animal.reprodutionDescription}</p>
        <p> <strong>Localização</strong>: {animal.locationDescription}</p>
      </div>
    </main>
  );
};

export { SpecificAnimalPage };
