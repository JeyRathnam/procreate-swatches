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
  }, [paletteId]);

  function handleSavePalette() {
    savePalette(paletteId, paletteName, palettes);
    toggleEditMode();
  }

  const handleCopyClick = useCallback(() => {
    console.log(palettes);
    copyAsNewPalette();
    navigate("/newPalette");
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

      <button onClick={handleCopyClick}>Copy as new</button>
    </StyledControlBarContainer>
  );
}
