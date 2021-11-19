import styled from "styled-components";
import { useStore } from "../store";

const StyledButton = styled.button`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #ff5da2;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  border: none;
  cursor: pointer;
`;

export default function AddNew() {
  const addEmptyPalette = useStore((state) => state.addEmptyPalette);

  return (
    <StyledButton onClick={() => addEmptyPalette()}>
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </StyledButton>
  );
}
