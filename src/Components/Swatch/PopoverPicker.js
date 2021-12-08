import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import styled from "styled-components";
import { useStore } from "../../store";
import "./Styles/picker.css";
import useClickOutside from "./useClickOutside";

const StyledColor = styled.div`
  width: ${(props) => props.size}vw;
  height: ${(props) => props.size}vw;
  align-content: center;
  ${(props) =>
    props.color !== null ? `background-color: ${props.color}` : ""};
  border: 1px solid rgb(153, 221, 204, 0.1);
`;

const StyledColorPicker = styled.div`
  position: absolute;
`;

const isEditModeSelector = (state) => state.isEditMode;

export const PopoverPicker = ({ paletteIndex, colorIndex }) => {
  const palettes = useStore((state) => state.palettes);

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
          backgroundColor: palettes[paletteIndex][colorIndex] ?? "",
        }}
        className="swatch"
        color={palettes[paletteIndex][colorIndex]}
        onClick={() => {
          if (isEditMode) {
            if (palettes[paletteIndex][colorIndex] === null) {
              handleColorChange("#000000");
            }
            toggle(true);
          }
        }}
      />

      {isOpen && (
        <StyledColorPicker className="popover" ref={popover}>
          <HexColorPicker
            color={palettes[paletteIndex][colorIndex]}
            onChange={handleColorChange}
          />
        </StyledColorPicker>
      )}
    </div>
  );
};
