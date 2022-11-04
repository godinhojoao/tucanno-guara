// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import env from './env.json';
import { HeaderProvider } from "./core/context/HeaderContext";
import { AppRoutes } from "./routes";

import "./styles/main.scss";

// const client = new ApolloClient({
//   uri: env.CMS_URI,
//   cache: new InMemoryCache(),
// });

function App(): JSX.Element {
  return (
    // <ApolloProvider client={client}>
    <HeaderProvider>
      <AppRoutes />
    </HeaderProvider>
    // </ApolloProvider>
  );
}

export default App;
