import create from "zustand";
import { devtools } from "zustand/middleware";

const emptyPalette = new Array(30).fill(null);

function updateColorInPalette(i, colorIndex, color, palettes) {
  // console.log(i, colorIndex, color, palettes);
  palettes[i][colorIndex] = color;
  return palettes;
}

function removePalette(paletteIndex, palettes) {
  palettes.splice(paletteIndex, 1);
  console.log(palettes);
  return palettes;
}

export const useStore = create(
  devtools((set) => ({
    palettes: [[]],

    addNewPalette: (palette) =>
      set((state) => ({ palettes: [...state.palettes, palette] })),

    addEmptyPalette: () =>
      set((state) => ({ palettes: [...state.palettes, [...emptyPalette]] })),

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
