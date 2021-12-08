import { useNavigate } from "react-router";
import styled from "styled-components";
import { NewPaletteIcon, UploadImageIcon } from "./../Icons/index";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 60vw;
  gap: 10px;
  flex-wrap: wrap;
`;
const SquareDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background: #0c1220;
  color: #ffffff;
  border-radius: 25px;
  cursor: pointer;
`;

const ItemText = styled.div`
  font-family: outfit;
  font-size: 18px;
  font-weight: 600;
`;

export default function Home() {
  const navigate = useNavigate();

  function onNewPaletteClick() {
    navigate("/newPalette");
  }

  return (
    <Container>
      <InnerContainer>
        <SquareDiv onClick={onNewPaletteClick}>
          <NewPaletteIcon />
          <ItemText>New Palette</ItemText>
        </SquareDiv>
        <SquareDiv>
          <UploadImageIcon />
          <ItemText>from Image</ItemText>
        </SquareDiv>
      </InnerContainer>
    </Container>
  );
}
