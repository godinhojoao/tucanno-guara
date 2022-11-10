import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { HeaderProvider } from "./core/context/HeaderContext";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Menu } from "./core/components/Menu";

import "./styles/main.scss";

const client = new ApolloClient({
  uri: import.meta.env.VITE_CMS_URI,
  cache: new InMemoryCache(),
});

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <HeaderProvider>
        <BrowserRouter>
          <Menu />
          <AppRoutes />
        </BrowserRouter>
      </HeaderProvider>
    </ApolloProvider>
  );
}

export default App;
