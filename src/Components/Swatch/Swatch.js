import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import Pallet from "./Pallet";

const StyledSwatchContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
`;

export default function Swatch() {
  const existingColors = [["#FFFFFF", "#000000"]];

  const [colorPalettes, setColorPalettes] = useState(existingColors);

  function updateColorPallete(i, colors) {
    console.log(i, colors);
    const newPalette = [...colorPalettes];
    newPalette[i] = colors;
    setColorPalettes(newPalette);
  }

  function addNewPalette(pallete) {
    console.log(...colorPalettes, pallete);
    const newPalette = [...colorPalettes, pallete];
    setColorPalettes(newPalette);
  }

  return (
    <StyledSwatchContainer>
      {colorPalettes.map((colorPalette, i) => (
        <Pallet
          key={i}
          colors={colorPalette}
          updateColorPalette={updateColorPallete}
          addNewPalette={addNewPalette}
        />
      ))}
    </StyledSwatchContainer>
  );
}
