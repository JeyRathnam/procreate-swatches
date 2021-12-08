import { useEffect } from "react";
import styled from "styled-components";
import { useStore } from "../store";
import AddNewButton from "./AddNewButton";
import ControlBar from "./Controls/ControlBar";
import Swatch from "./Swatch/Swatch";

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

export default function NewPalette() {
  const palettes = useStore((state) => state.palettes);
  const resetPaletteState = useStore((state) => state.resetPaletteState);
  useEffect(() => {
    resetPaletteState();
  }, []);
  // console.log("home", palettes);
  return (
    <Container>
      <ControlBar palettes={palettes} />
      <Swatch palettes={palettes} />
      <AddNewButton />
    </Container>
  );
}
