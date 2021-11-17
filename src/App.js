import { createGlobalStyle } from "styled-components";
import Layout from "./Components/Layout/Layout";
import Swatch from "./Components/Swatch/Swatch";

const GlobalStyle = createGlobalStyle`
  body {
    margin : 0;
    padding: 0;
    background : #0f172a;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Swatch />
      </Layout>
    </>
  );
}

export default App;
