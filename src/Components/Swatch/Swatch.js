import styled from "styled-components";
import { useStore } from "../../store";
import Pallet from "./Pallet";

const StyledSwatchContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
`;

export default function Swatch() {
  const colorPalettes = useStore((state) => state.palettes);

  return (
    <StyledSwatchContainer>
      {colorPalettes.map((colorPalette, i) => (
        <Pallet key={i} paletteIndex={i} colors={colorPalette} />
      ))}
    </StyledSwatchContainer>
  );
}
