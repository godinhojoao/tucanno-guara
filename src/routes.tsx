import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./core/components/Header";
import { HeaderContext } from "./core/context/HeaderContext";
import { AllAnimals } from "./pages/AllAnimals";
import { AnimalsByClass } from "./pages/AnimalsByClass";
import { Home } from "./pages/Home";
import { SpecificAnimal } from "./pages/SpecificAnimal";

const RouteWithHeader = ({ children }: any): any => {
  const { title, subtitle, linkToNavigate, highlight } = useContext(HeaderContext);

  return (
    <>
      <Header
        title={title}
        subtitle={subtitle}
        highlight={highlight}
        linkToNavigate={linkToNavigate}
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
              <Home />
            </RouteWithHeader>
          }
        />

        {/* <Route
          path="/sobre"
          element={
            <RouteWithHeader>
            // about page here
            </RouteWithHeader>
          }
        /> */}

        <Route
          path="/animais"
          element={
            <RouteWithHeader>
              <AllAnimals />
            </RouteWithHeader>
          }
        />

        <Route
          path="/animais/:class"
          element={
            <RouteWithHeader>
              <AnimalsByClass />
            </RouteWithHeader>
          }
        />

        <Route
          path="/animal/:id"
          element={
            <RouteWithHeader>
              <SpecificAnimal />
            </RouteWithHeader>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
