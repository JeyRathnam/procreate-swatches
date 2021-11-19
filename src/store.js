import create from "zustand";
import { devtools } from "zustand/middleware";

function updateColorInPalette(i, colorIndex, color, palettes) {
  palettes[i][colorIndex] = color;
  return palettes;
}

function removePalette(paletteIndex, palettes) {
  console.log(palettes, paletteIndex, palettes.length);
  palettes.splice(paletteIndex, 1);
  return palettes;
}

export const useStore = create(
  devtools((set) => ({
    palettes: [[]],

    addNewPalette: (palette) =>
      set((state) => ({ palettes: [...state.palettes, palette] })),

    addEmptyPalette: () =>
      set((state) => ({ palettes: [...state.palettes, []] })),

    updateColorInPalette: (paletteIndex, colorIndex, color) =>
      set((state) => ({
        palettes: updateColorInPalette(paletteIndex, colorIndex, color, [
          ...state.palettes,
        ]),
      })),

    deletePalette: (paletteIndex) =>
      set((state) => ({
        palettes: removePalette(paletteIndex, [...state.palettes]),
      })),
  }))
);
