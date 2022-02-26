import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useStore } from "../../store";
import { supabase } from "../../Supabase/supabaseClient";
import { default as PaletteNameControl } from "./PaletteNameControl";

const StyledControlBarContainer = styled.div`
  display: flex;
  height: 50px;
  width: 55vw;
  justify-content: left;
  align-items: center;
`;

const StyledCopyAsNewButton = styled.button`
  decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  color: white;

  font-weight: 600;
  height: 2.5rem;
  min-width: 2.5rem;
  font-size: 14px;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 2px solid transparent;
  border-radius: 0.375rem;
  background: #50176a;

  &:hover {
    background: #000d6b;
  }
`;

const paletteIdSelector = (state) => state.paletteId;
const paletteNameSelector = (state) => state.paletteName;
const palettesSelector = (state) => state.palettes;
const isEditModeSelector = (state) => state.isEditMode;

export default function ControlBar() {
  const paletteId = useStore(paletteIdSelector);
  const paletteName = useStore(paletteNameSelector);
  const palettes = useStore(palettesSelector);
  const isEditMode = useStore(isEditModeSelector);
  const updatePaletteName = useStore((state) => state.updatePaletteName);
  const savePalette = useStore((state) => state.savePalette);
  const isOwned = useStore((state) => state.isOwned) && supabase.auth.user();
  const toggleEditMode = useStore((state) => state.toggleEditMode);

  const navigate = useNavigate();
  const paletteNameRef = useRef(null);
  const copyAsNewPalette = useStore((state) => state.copyAsNewPalette);

  useEffect(() => {
    if (paletteId !== null) {
      navigate(`/palette/${paletteId}`);
    }
  }, [paletteId, navigate]);

  function handleSavePalette() {
    savePalette(paletteId, paletteName, palettes);
    toggleEditMode();
  }

  const handleCopyClick = useCallback(() => {
    copyAsNewPalette();
    navigate("/new-palette");
  }, [copyAsNewPalette, navigate]);

  return (
    <StyledControlBarContainer>
      <PaletteNameControl
        name={paletteName}
        nameRef={paletteNameRef}
        allowEdit={isOwned}
        showNameInput={isEditMode}
        onTextChange={(e) => {
          updatePaletteName(e.target.value);
        }}
        onSaveClick={() => handleSavePalette()}
        onEditClick={toggleEditMode}
      />

      <StyledCopyAsNewButton onClick={handleCopyClick}>
        Copy as new
      </StyledCopyAsNewButton>
    </StyledControlBarContainer>
  );
}
