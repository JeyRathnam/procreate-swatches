import styled from "styled-components";
import { useStore } from "../../store";
import exportTozip from "../../Utils/export";
import { CopyIcon, DeleteIcon, ExportIcon } from "./Icons";
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

const StyledPaletteActions = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: space-evenly;
`;

function ThirtyItems(colors, paletteIndex) {
  const items = [];
  console.log(colors);
  for (let i = 0; i < 30; i++) {
    const color = colors[i] ?? null;
    items.push(
      <PopoverPicker
        key={i}
        paletteIndex={paletteIndex}
        colorIndex={i}
        color={color}
      />
    );
  }

  return items;
}

export default function Pallet({ paletteIndex, colors }) {
  const addNewPalette = useStore((state) => state.addNewPalette);
  const deletePalette = useStore((state) => state.deletePalette);

  return (
    <StyledPallet>
      <StyledGrid>{ThirtyItems(colors, paletteIndex)}</StyledGrid>
      <StyledPaletteActions>
        <ExportIcon onExportClick={() => exportTozip(colors)} />
        <CopyIcon
          onCopyClick={() => addNewPalette(Object.assign({}, colors))}
        />
        <DeleteIcon onDeleteClick={() => deletePalette(paletteIndex)} />
      </StyledPaletteActions>
    </StyledPallet>
  );
}
