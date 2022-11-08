import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimalsList } from "../../core/components/AnimalList";
import { HeaderContext } from "../../core/context/HeaderContext";
import { getCorrectClassName } from "../../core/shared/getCorrectClassName";
import { HeaderProps } from "../../core/interfaces/props/HeaderProps";
import { AnimalClasses } from "../../core/interfaces/AnimalClasses";

import "./styles.scss";
import { animalsApi } from "../../core/api/Api";

const AnimalsByClassPage = (): JSX.Element => {
  const params = useParams();
  const navigate = useNavigate();
  const currentClassName = getCorrectClassName(params.class as AnimalClasses);
  const animalsByClassHeaderParams: HeaderProps = {
    title: "Conheça __ do pampa",
    highlight: currentClassName,
    subtitle:
      "Este é um site com fins educativos, sinta-se livre para explorar e aprender mais sobre os animais dos biomas brasileiros.",
  };
  const { handleChangeHeader } = useContext(HeaderContext);
  const { data } = animalsApi.loadAnimals({
    lastCount: 5,
    animalClass: params.class as AnimalClasses,
  });

  useEffect(() => {
    if (!currentClassName) {
      return navigate("/");
    }
    handleChangeHeader(animalsByClassHeaderParams);
  }, []);

  return (
    <main className="animals-by-class main">
      <div className="animals-by-class__content main__content">
        <AnimalsList title={currentClassName} animals={data?.animals} />
      </div>
    </main>
  );
};

export { AnimalsByClassPage };
