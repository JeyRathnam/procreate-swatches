import styled from "styled-components";
import { useStore } from "../../store";
import exportTozip from "../../Utils/export";
import { PopoverPicker } from "./PopoverPicker";

const StyledPallet = styled.div`
  display: flex;
  margin: 5px;
  flex-direction: row;
  border: 2px solid #ff5da2b3;
  border-radius: 10px;
  padding: 10px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1px;
`;

const StyledActionButton = styled.button`
  width: 25px;
  height: 25px;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: white;
  flex-grow: 1;
`;

const StyledExportButton = styled(StyledActionButton)``;

const StyledPaletteActions = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: space-evenly;
`;

function ThirtyItems(colors, paletteIndex) {
  const items = [];

  if (colors.length <= 30) {
    for (let i = colors.length; i < 30; i++) {
      colors[i] = null;
    }
  }

  colors.forEach((color, i) =>
    items.push(
      <PopoverPicker
        key={i}
        color={color}
        paletteIndex={paletteIndex}
        colorIndex={i}
      />
    )
  );

  return items;
}

export default function Pallet({ paletteIndex, colors }) {
  const addNewPalette = useStore((state) => state.addNewPalette);
  const deletePalette = useStore((state) => state.deletePalette);

  return (
    <StyledPallet>
      <StyledGrid>{ThirtyItems(colors, paletteIndex)}</StyledGrid>
      <StyledPaletteActions>
        <StyledExportButton onClick={() => exportTozip(colors)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            ></path>
          </svg>
        </StyledExportButton>
        <StyledActionButton onClick={() => addNewPalette(colors.slice(0))}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </StyledActionButton>
        <StyledActionButton onClick={() => deletePalette(paletteIndex)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </StyledActionButton>
      </StyledPaletteActions>
    </StyledPallet>
  );
}
