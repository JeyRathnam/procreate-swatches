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

  if (colors.length <= 30) {
    for (let i = colors.length; i < 30; i++) {
      colors[i] = null;
    }
  }

  colors.forEach((color, i) =>
    items.push(
      <PopoverPicker key={i} paletteIndex={paletteIndex} colorIndex={i} />
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
        <ExportIcon onExportClick={() => exportTozip(colors)} />
        <CopyIcon onCopyClick={() => addNewPalette(colors.slice(0))} />
        <DeleteIcon onDeleteClick={() => deletePalette(paletteIndex)} />
      </StyledPaletteActions>
    </StyledPallet>
  );
}
