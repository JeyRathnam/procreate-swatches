import create from "zustand";

function updateColorInPalette(i, colorIndex, color, palettes) {
  palettes[i][colorIndex] = color;
  return palettes;
}

const useStore = create((set) => ({
  palettes: [[]],
  addNewPalette: (palette) =>
    set((state) => ({ palettes: [...state.palettes, palette] })),
  updateColorInPalette: (i, colorIndex, color) =>
    set((state) => updateColorInPalette(i, colorIndex, color, state.palettes)),
}));
