import { useContext, useEffect } from "react";
import { HeaderContext } from "../../core/context/HeaderContext";

import "./styles.scss";

const SpecificAnimal = (): JSX.Element => {
  const { handleChangeHeader } = useContext(HeaderContext);
  const specificAnimalHeaderParams = {
    title: "Conheça os animais do pampa",
  };

  useEffect(() => {
    handleChangeHeader(specificAnimalHeaderParams);
  }, []);

  return (
    <main className="all-animals main">
      <div className="all-animals__content main__content">
        dale
      </div>
    </main>
  );
};

export { SpecificAnimal };
