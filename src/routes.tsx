import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./core/components/Header";
import { HeaderContext } from "./core/context/HeaderContext";
import { AllAnimals } from "./pages/AllAnimals";
import { Home } from "./pages/Home";

const RouteWithHeader = ({ children }: any): any => {
  const { title, subtitle, linkToNavigate } = useContext(HeaderContext);

  return (
    <>
      <Header
        title={title}
        subtitle={subtitle}
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

        <Route
          path="todos-animais"
          element={
            <RouteWithHeader>
              <AllAnimals />
            </RouteWithHeader>
          }
        />
        {/* <Route path="/animais/:id" element={<Home />} /> */}
        {/* <Route path="/sobre" element={<Home />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
