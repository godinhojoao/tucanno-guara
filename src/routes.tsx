import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./core/components/Header";
import { HeaderContext } from "./core/context/HeaderContext";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { AllAnimalsPage } from "./pages/AllAnimals";
import { AnimalsByClassPage } from "./pages/AnimalsByClass";
import { SpecificAnimalPage } from "./pages/SpecificAnimal";

const RouteWithHeader = ({ children }: any): JSX.Element => {
  const { title, subtitle, linkToNavigate, highlight, animal } =
    useContext(HeaderContext);

  return (
    <>
      <Header
        title={title}
        subtitle={subtitle}
        highlight={highlight}
        linkToNavigate={linkToNavigate}
        animal={animal}
      />
      {children}
    </>
  );
};

const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RouteWithHeader>
              <HomePage />
            </RouteWithHeader>
          }
        />

        <Route
          path="/sobre"
          element={
            <RouteWithHeader>
              <AboutPage />
            </RouteWithHeader>
          }
        />

        <Route
          path="/animais"
          element={
            <RouteWithHeader>
              <AllAnimalsPage />
            </RouteWithHeader>
          }
        />

        <Route
          path="/animais/:class"
          element={
            <RouteWithHeader>
              <AnimalsByClassPage />
            </RouteWithHeader>
          }
        />

        <Route
          path="/animal/:id"
          element={
            <RouteWithHeader>
              <SpecificAnimalPage />
            </RouteWithHeader>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
