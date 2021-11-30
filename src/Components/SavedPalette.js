import { useEffect, useReducer } from "react";
import { useParams } from "react-router";
import { get_palette } from "../Supabase/db";
import ControlBar from "./Controls/ControlBar";
import Swatch from "./Swatch/Swatch";

const initialState = {
  isLoading: true,
  isError: false,
  data: {
    paletteName: "",
    palette: [],
    paletteId: "",
    userId: "",
    isOwned: false,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "ERROR":
      return { ...state, isError: true };

    case "SET_DATA":
      return { ...state, isLoading: false, isError: false, data: action.data };
  }
}

export default function SavedPalette() {
  const { paletteId } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    get_palette(paletteId)
      .then(({ paletteName, palette, isOwned }) => {
        const data = {
          paletteName: paletteName,
          palette: palette,
          paletteId: paletteId,
          userId: "",
          isOwned: isOwned,
        };

        dispatch({ type: "SET_DATA", data: data });
      })
      .catch(dispatch({ type: "ERROR" }));
  }, []);

  if (state.isLoading) {
    return <div>Loading ...</div>;
  }

  if (state.isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <ControlBar
        id={state.data.paletteId}
        paletteName={state.data.paletteName}
        palettes={state.data.palette}
        allowEdit={state.data.isOwned}
      />
      <Swatch palettes={state.data.palette} />
    </>
  );
}
