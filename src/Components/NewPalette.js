import { useStore } from "../store";
import ControlBar from "./Controls/ControlBar";
import Swatch from "./Swatch/Swatch";

export default function NewPalette() {
  const palettes = useStore((state) => state.palettes);
  // console.log("home", palettes);
  return (
    <>
      <ControlBar palettes={palettes} />
      <Swatch palettes={palettes} />
    </>
  );
}
