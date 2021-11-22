import styled from "styled-components";
import { useStore } from "../../store";
import { supabase } from "../../Supabase/supabaseClient";

const StyledControlBarContainer = styled.div`
  display: flex;
  height: 50px;
  width: 55vw;
  justify-content: left;
  align-items: center;
`;

const StyledSaveTextBox = styled.input`
  width: 20em;
  height: 1.5rem;
  border: 2px solid transparent;
  border-radius: 0.2rem;
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

async function handleSave(palette) {
  console.log(palette);
  const { data, error } = await supabase
    .from("palette")
    .insert([{ palette: palette }]);

  console.log(data, error);
}

export default function ControlBar() {
  const palette = useStore((state) => state.palettes);
  return (
    <StyledControlBarContainer>
      <StyledSaveTextBox />
      <StyledSaveButton onClick={() => handleSave(palette)}>
        save
      </StyledSaveButton>
    </StyledControlBarContainer>
  );
}
