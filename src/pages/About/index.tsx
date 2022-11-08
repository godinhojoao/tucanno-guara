import { useContext, useEffect } from "react";
import { HeaderContext } from "../../core/context/HeaderContext";
import { HeaderProps } from "../../core/interfaces/props/HeaderProps";
import AboutUsImage from "./../../assets/about-us.png";

import "./styles.scss";

const AboutPage = (): JSX.Element => {
  const { handleChangeHeader } = useContext(HeaderContext);
  const homeHeaderParams: HeaderProps = {
    title: "Olá, conheça mais o __",
    highlight: "Tucano-guará",
  };

  useEffect(() => {
    handleChangeHeader(homeHeaderParams);
  }, []);

  return (
    <main className="about main">
      <div className="about__content main__content">
        <div>
          <p>
          A página Tucano-guará foi criada para a divulgação de animais
          presentes no Bioma Pampa, sendo desenvolvida com o auxílio de alunos
          de escolas públicas de Bagé. Os alunos são responsáveis por escolher
          um animal e fazer uma pesquisa guiada na Internet sobre informações
          pré-estabelecidas. A página é uma ferramenta educativa que tem como
          objetivo fornecer informações sobre a biodiversidade do Pampa e a
          importância da sua conservação.
          </p>
          <p className="about__content__subtitle"><strong>Equipe desenvolvedora:</strong></p>
          <p>Programador: João Godinho Jardim – aluno do Técnico Integrado do IFSul câmpus Bagé</p>
          <p>Designer: João Augusto de Freitas Tarouco - aluno do Técnico Integrado do IFSul câmpus Bagé</p>
          <p>Coordenadora do projeto: Aline Jaime Leal - Professora de Biologia do IFSul câmpus Bagé</p>
          <p>Colaboradora do projeto: Vanessa Costa Freitas – Professora do Estado do Rio Grande do Sul</p>
        </div>

        <img className="about__content__image" src={AboutUsImage} alt="Colaboradores" />
      </div>
    </main>
  );
};

export { AboutPage };
