import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";
import { HeaderProvider } from "./core/context/HeaderContext";
import { HashRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Menu } from "./core/components/Menu";

import "./styles/main.scss";

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_CMS_URI, // not working yet to testing library
    fetch
  }),
  cache: new InMemoryCache(),
});

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <HeaderProvider>
        <HashRouter>
          <Menu />
          <AppRoutes />
        </HashRouter>
      </HeaderProvider>
    </ApolloProvider>
  );
}

export default App;
