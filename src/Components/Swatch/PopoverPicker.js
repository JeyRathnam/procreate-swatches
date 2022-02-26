import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import styled from "styled-components";
import { useStore } from "../../store";
import "./Styles/picker.css";
import useClickOutside from "./useClickOutside";

const StyledColorPicker = styled.div`
  position: absolute;
`;

const isEditModeSelector = (state) => state.isEditMode;

export const PopoverPicker = ({ paletteIndex, colorIndex, color }) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);
  const updateColorInPalette = useStore((store) => store.updateColorInPalette);
  const isEditMode = useStore(isEditModeSelector);
  // const color = useMemo(() => palettes[paletteIndex][colorIndex], [])

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  // useEffect(() => {
  //   updateColorInPalette(paletteIndex, colorIndex, backgroundColor);
  // }, [paletteIndex, colorIndex, backgroundColor, updateColorInPalette]);

  function handleColorChange(color) {
    updateColorInPalette(paletteIndex, colorIndex, color);
  }

  return (
    <div className="picker">
      <div
        style={{
          backgroundColor: color ?? "",
        }}
        className="swatch"
        color={color}
        onClick={() => {
          if (isEditMode) {
            if (color === null) {
              handleColorChange("#000000");
            }
            toggle(true);
          }
        }}
      />

      {isOpen && (
        <StyledColorPicker className="popover" ref={popover}>
          <HexColorPicker color={color} onChange={handleColorChange} />
        </StyledColorPicker>
      )}
    </div>
  );
};
