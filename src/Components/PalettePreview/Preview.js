import styled from "styled-components";

const StyledPreview = styled.div`
  width: 200px;
  overflow: hidden;
  cursor: pointer;
`;

const StyledGrid = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid #ff5da2b3;
  border-radius: 5px;
  padding: 3px;
`;

const MiniSquare = styled.div`
  height: 38px; //to compensate for 2px top and bottom border when no color
`;

const StyledH3 = styled.h3`
  font-family: outfit;
  font-weight: 100;
  color: white;
  text-overflow: ellipsis;
  margin: 5px 0;
  /* Needed to make it work */
  overflow: hidden;
  white-space: nowrap;
`;
function getFiveColors(palettes) {
  let maxColors = 5;
  let colors = new Array(maxColors).fill(<MiniSquare />);
  let currentFilled = 0;
  for (let i = 0; i < palettes.length; i++) {
    let palette = palettes[i];
    const paletteObjects = Object.keys(palette);

    for (let j = 0; j < paletteObjects.length; j++) {
      const color = palette[paletteObjects[j]];
      colors[currentFilled] = (
        <MiniSquare
          style={{
            backgroundColor: color ?? "",
            width: "40px",
            height: "40px",
          }}
        />
      );
      currentFilled++;
      if (currentFilled == maxColors) {
        break;
      }
    }

    if (currentFilled == maxColors) {
      break;
    }
  }

  return colors;
}

export default function Preview({ palettes, name, onClick }) {
  return (
    <StyledPreview onClick={onClick}>
      <StyledGrid>{getFiveColors(palettes)}</StyledGrid>
      <StyledH3>{name}</StyledH3>
    </StyledPreview>
  );
}
