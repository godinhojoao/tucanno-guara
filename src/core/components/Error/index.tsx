import "./styles.scss";
import SadAnimalPng from "./../../../assets/sad-animal.png";

const ErrorContent = (): JSX.Element => {
  return <div className="error">Houve um erro inesperado <img src={SadAnimalPng} alt="Cara de um animal triste" /></div>;
};

export { ErrorContent };
