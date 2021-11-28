import { supabase } from "./supabaseClient";

export async function savePalette(paletteDetail) {
  console.log("before save", paletteDetail);
  const user = supabase.auth.user();

  const { data, error } = await supabase.from("palette").upsert(
    {
      id: paletteDetail.id,
      palette: paletteDetail.palette,
      user_id: user ? user.id : null,
      name: paletteDetail.name,
    },
    { onConflict: "id" }
  );

  if (error) {
    console.log(error);
    return;
  }

  console.log(data);

  return data[0];
}

export async function insert_palette(paletteDetail) {
  const user = supabase.auth.user();
  const { data, error } = await supabase.rpc("insert_palette", paletteDetail);

  if (error) {
    console.log(error);
    return;
  }

  console.log(data);
  return data;
}

export async function get_palette(paletteId) {
  const { data, error } = await supabase
    .from("palette")
    .select("palette, palette_name")
    .eq("id", paletteId);

  if (error) {
    console.log(error);
  }

  console.log(data);

  return data[0];
}
