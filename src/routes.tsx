import { useContext } from "react";
import { useRoutes } from "react-router-dom";
import { Header } from "./core/components/Header";
import { HeaderContext } from "./core/context/HeaderContext";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { AllAnimalsPage } from "./pages/AllAnimals";
import { AnimalsByClassPage } from "./pages/AnimalsByClass";
import { SpecificAnimalPage } from "./pages/SpecificAnimal";
import { Footer } from "./core/components/Footer";


function AppRoutes(): JSX.Element {
  const { title, subtitle, linkToNavigate, highlight } =
    useContext(HeaderContext);

  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/sobre", element: <AboutPage /> },
    { path: "/animais", element: <AllAnimalsPage /> },
    { path: "/animais/:class", element: <AnimalsByClassPage /> },
    { path: "/animal/:id", element: <SpecificAnimalPage /> },
  ]);
  return (
    <>
      <Header
        title={title}
        subtitle={subtitle}
        highlight={highlight}
        linkToNavigate={linkToNavigate}
      />
      {routes}
      <Footer />
    </>
  );
}

export { AppRoutes };
