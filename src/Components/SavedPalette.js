import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get_palette } from "../Supabase/db";
import ControlBar from "./Controls/ControlBar";
import Swatch from "./Swatch/Swatch";

export default function SavedPalette() {
  const { paletteId } = useParams();
  const [palette, setPalette] = useState([]);
  const [paletteName, setPaletteName] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get_palette(paletteId)
      .then(({ palette_name, palette }) => {
        console.log(palette_name, palette);
        setPaletteName(palette_name);
        setPalette(palette);
        setLoading(false);
      })
      .catch((e) => setError(true));
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <ControlBar id={paletteId} paletteName={paletteName} palettes={palette} />
      <Swatch palettes={palette} />
    </>
  );
}
