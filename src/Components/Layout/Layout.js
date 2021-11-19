import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  width: 95vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      {/* <Footer /> */}
    </>
  );
}
