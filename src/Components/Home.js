import { useNavigate } from "react-router";
import styled from "styled-components";
import { useStore } from "../store";
import { NewPaletteIcon, UploadImageIcon } from "./../Icons/index";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const InnerContainerRow = styled.div`
  display: flex;
  width: 60vw;
  gap: 10px;
  flex-wrap: wrap;
`;

const InnerContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
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

const StyledSectionHeader = styled.h3`
  margin-left: 10px;
  font-family: outfit;
  color: white;
`;

export default function Home() {
  const resetPaletteState = useStore((state) => state.resetPaletteState);
  const navigate = useNavigate();

  function onNewPaletteClick() {
    resetPaletteState();
    navigate("/new-palette");
  }

  return (
    <Container>
      <InnerContainerRow>
        <SquareDiv onClick={onNewPaletteClick}>
          <NewPaletteIcon />
          <ItemText>New Palette</ItemText>
        </SquareDiv>
        {/* <SquareDiv>
          <UploadImageIcon />
          <ItemText>from Image</ItemText>
        </SquareDiv> */}
      </InnerContainerRow>
      <InnerContainerColumn>
        <StyledSectionHeader>Your palettes</StyledSectionHeader>
        <SquareDiv>
          <UploadImageIcon />
          <ItemText>from Image</ItemText>
        </SquareDiv>
      </InnerContainerColumn>
      <InnerContainerColumn>
        <StyledSectionHeader>Unsaved palettes</StyledSectionHeader>
        <SquareDiv>
          <UploadImageIcon />
          <ItemText>from Image</ItemText>
        </SquareDiv>
      </InnerContainerColumn>
    </Container>
  );
}
