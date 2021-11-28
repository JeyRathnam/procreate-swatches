import styled from "styled-components";

export const StyledButton = styled.button`
  margin-left: 5px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 600;
  height: 2rem;
`;

const StyledEditIcon = styled.svg`
  width: 30px;
  height: 30px;
  color: grey;
`;

export default function EditIcon({ onClick }) {
  return (
    <StyledButton onClick={() => onClick()}>
      <StyledEditIcon
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
      </StyledEditIcon>
    </StyledButton>
  );
}
