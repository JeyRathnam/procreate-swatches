import styled from "styled-components";
import Pallet from "./Pallet";

const StyledSwatchContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
`;

export default function Swatch({ palettes }) {
  if (!Array.isArray(palettes)) {
    return <div>Error</div>;
  }

  return (
    <StyledSwatchContainer>
      {palettes.map((colorPalette, i) => (
        <Pallet key={i} paletteIndex={i} colors={colorPalette} />
      ))}
    </StyledSwatchContainer>
  );
}
