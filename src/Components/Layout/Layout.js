import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
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
