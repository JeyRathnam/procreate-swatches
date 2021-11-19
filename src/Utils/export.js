import saveAs from "file-saver";
import JSZip from "jszip";
import Color from "onecolor";
function exportJson(colors) {
  const data = [{ swatches: [] }];
  colors.forEach((color) => {
    if (color !== null) {
      const parsed = Color(color);
      const hsv = parsed.hsv();
      console.log(parsed, hsv);
      const colorSpace = 0;

      data[0].swatches.push({
        hue: hsv.h(),
        saturation: hsv.s(),
        brightness: hsv.v(),
        alpha: 1,
        colorSpace,
      });
    }
  });

  return JSON.stringify(data);
}

export default function exportTozip(colors) {
  const data = exportJson(colors);
  console.log(data);
  var zip = new JSZip();
  zip.file("Swatches.json", data);
  zip.generateAsync({ type: "blob" }).then(function (content) {
    saveAs(content, "export.swatches");
  });
}
