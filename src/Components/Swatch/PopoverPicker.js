import React, { useCallback, useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import styled from "styled-components";
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

export const PopoverPicker = ({ Existingcolor, index, onChange }) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);
  const [color, setColor] = useState(Existingcolor); //TODO : Fix null state on click

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  useEffect(() => {
    onChange(index, color);
  }, [color]);

  return (
    <div className="picker">
      <StyledColor
        className="swatch"
        size={5}
        color={color}
        onClick={() => {
          if (color === null) {
            setColor("#000000");
          }
          toggle(true);
        }}
      />

      {isOpen && (
        <StyledColorPicker className="popover" ref={popover}>
          <HexColorPicker color={color} onChange={setColor} />
        </StyledColorPicker>
      )}
    </div>
  );
};
