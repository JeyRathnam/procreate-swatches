import { useEffect, useReducer, useRef } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { insert_palette, savePalette } from "../../Supabase/db";
import { default as PaletteNameControl } from "./PaletteNameControl";

const StyledControlBarContainer = styled.div`
  display: flex;
  height: 50px;
  width: 55vw;
  justify-content: left;
  align-items: center;
`;

async function handleSave(id, palette, name) {
  console.log(name);
  const paletteDetail = {
    id: id,
    name: name,
    palette: palette,
  };
  return await savePalette(paletteDetail)
    .then((data) => data.id)
    .catch((e) => e);
}

function reducer(state, action) {
  switch (action.type) {
    case "SAVE_PALETTE":
      return { ...state, showNameInput: false, id: action.payload };

    case "TOGGLE_INPUT":
      return { ...state, showNameInput: !state.showNameInput };

    case "TEXT_CHANGE":
      return { ...state, name: action.payload };
  }
}

export default function ControlBar({ id, allowEdit, paletteName, palettes }) {
  const navigate = useNavigate();
  const initialState = {
    name: paletteName ?? "",
    palettes: palettes,
    showNameInput: !id ? true : false,
    isOwned: false,
    id: id,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const paletteNameRef = useRef(null);

  useEffect(() => console.log(state), [state]);

  async function onSave() {
    const paletteDetail = {
      palette_id: state.id ?? "",
      inp_palette_name: state.name,
      inp_palette: state.palettes,
    };

    insert_palette(paletteDetail).then((data) => {
      console.log(data);
      dispatch({
        type: "SAVE_PALETTE",
        payload: data,
      });

      navigate(`/palette/${data}`);
    });
  }

  return (
    <StyledControlBarContainer>
      <PaletteNameControl
        name={state.name}
        nameRef={paletteNameRef}
        allowEdit={allowEdit}
        showNameInput={state.showNameInput}
        onTextChange={(e) =>
          dispatch({ type: "TEXT_CHANGE", payload: e.target.value })
        }
        onSaveClick={() => onSave()}
        onEditClick={() => dispatch({ type: "TOGGLE_INPUT" })}
      />
    </StyledControlBarContainer>
  );
}
