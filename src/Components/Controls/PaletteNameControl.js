import styled from "styled-components";
import EditIcon from "./EditIcon";

const StyledNameContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const StyledSaveButton = styled.button`
  margin-left: 5px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 600;
  height: 2rem;

  font-size: 15px;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 2px solid transparent;
  border-radius: 0.2rem;
  background: #ff5da2;
`;

const StyledSaveTextBox = styled.input`
  height: 1.5rem;
  border: 2px solid transparent;
  border-radius: 0.2rem;
  width: 20em;
`;

const StyledH1 = styled.h1`
  font-family: outfit;
  color: white;
  text-overflow: ellipsis;

  /* Needed to make it work */
  overflow: hidden;
  white-space: nowrap;
`;

export default function PaletteNameControl({
  name,
  nameRef,
  showNameInput,
  onTextChange,
  allowEdit,
  onSaveClick,
  onEditClick,
}) {
  return (
    <StyledNameContainer>
      {showNameInput ? (
        <>
          <StyledSaveTextBox
            ref={nameRef}
            value={name}
            onChange={onTextChange}
          />
          <StyledSaveButton onClick={() => onSaveClick()}>
            Save
          </StyledSaveButton>
        </>
      ) : (
        <>
          <StyledH1>{name}</StyledH1>
          {allowEdit && (
            <EditIcon
              onClick={() => {
                onEditClick();
              }}
            />
          )}
        </>
      )}
    </StyledNameContainer>
  );
}
