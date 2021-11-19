import React, { useCallback, useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import styled from "styled-components";
import { useStore } from "../../store";
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

export const PopoverPicker = ({ color, paletteIndex, colorIndex }) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(color);
  const updateColorInPalette = useStore((store) => store.updateColorInPalette);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  useEffect(() => {
    updateColorInPalette(paletteIndex, colorIndex, backgroundColor);
  }, [backgroundColor]);

  return (
    <div className="picker">
      <StyledColor
        className="swatch"
        size={5}
        color={color}
        onClick={() => {
          if (color === null) {
            setBackgroundColor("#000000");
          }
          toggle(true);
        }}
      />

      {isOpen && (
        <StyledColorPicker className="popover" ref={popover}>
          <HexColorPicker
            color={backgroundColor}
            onChange={setBackgroundColor}
          />
        </StyledColorPicker>
      )}
    </div>
  );
};
