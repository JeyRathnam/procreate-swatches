import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
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

export default function SavedPalette() {
  const { paletteId } = useParams();
  console.log(paletteId);
  const [loading, setLoading] = useState(true);
  const getPaletteFromId = useStore((state) => state.getPaletteFromId);
  const palettes = useStore((state) => state.palettes);

  console.log(loading);

  useEffect(() => {
    getPaletteFromId(paletteId).then(() => setLoading(false));
  }, []);

  if (loading) {
    return <Container>loading ... </Container>;
  }

  return (
    <Container>
      <ControlBar />
      <Swatch palettes={palettes} />
      <AddNewButton />
    </Container>
  );
}
