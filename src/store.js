import create from "zustand";
import { devtools } from "zustand/middleware";
import { insert_palette } from "./Supabase/db";
import { supabase } from "./Supabase/supabaseClient";

const emptyPalette = new Array(30).fill(null);

const initalState = {
  paletteId: null,
  palettes: [[]],
  paletteName: "",
  isOwned: true,
  isEditMode: true,
};

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
    paletteId: null,
    palettes: [{}],
    paletteName: "",
    isOwned: true,
    isEditMode: true,

    resetPaletteState: () =>
      set((state) => ({
        paletteId: null,
        palettes: [{}],
        paletteName: "",
        isOwned: true,
        isEditMode: true,
      })),

    addNewPalette: (palette) =>
      set((state) => ({ palettes: [...state.palettes, palette] })),

    copyAsNewPalette: () =>
      set((state) => ({
        palettes: [...state.palettes],
        paletteId: null,
        paletteName: "",
        isOwned: true,
        isEditMode: true,
      })),

    addEmptyPalette: () =>
      set((state) => ({ palettes: [...state.palettes, [...emptyPalette]] })),

    updateColorInPalette: (paletteIndex, colorIndex, color) => {
      set((state) => ({
        palettes: updateColorInPalette(paletteIndex, colorIndex, color, [
          ...state.palettes,
        ]),
      }));
    },

    deletePalette: (paletteIndex) =>
      set((state) => ({
        palettes: removePalette(paletteIndex, [...state.palettes]),
      })),

    updatePaletteName: (paletteName) =>
      set((state) => ({
        paletteName: paletteName,
      })),

    savePalette: async (paletteId, paletteName, palettes) => {
      const paletteDetail = {
        palette_id: paletteId && supabase.auth.user() ? paletteId : "",
        inp_palette_name: paletteName,
        inp_palette: palettes,
      };
      console.log(paletteDetail);

      insert_palette(paletteDetail)
        .then((data) => {
          set({ paletteId: data });
        })
        .catch((e) => console.log(e));
    },

    getPaletteFromId: async (inp_palette_id) => {
      let { data, error } = await supabase.rpc("get_palette", {
        inp_palette_id,
      });
      console.log(data);
      if (error || !data) {
        return;
      }

      set((state) => ({
        paletteId: inp_palette_id,
        paletteName: data.paletteName,
        palettes: data.palette,
        isOwned: data.isOwned,
        isEditMode: false,
      }));
    },

    toggleEditMode: () => set((state) => ({ isEditMode: !state.isEditMode })),
  }))
);

// const paletteNameFns = {
//   updatePaletteName: (paletteName) =>
//     set((state) => ({
//       paletteName: paletteName,
//     })),
// };
