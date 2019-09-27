export const hslaToRgb = ({ hue, saturation, luminosity }: any) => {
  let red;
  let green;
  let blue;
  saturation = saturation / 100;
  luminosity = luminosity / 100;
  hue = hue / 360;

  if (saturation === 0) {
    red = green = blue = luminosity;
  } else {
    const hue2rgb = (p: any, q: any, t: any) => {
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
      }
      if (t < 1 / 2) {
        return q;
      }
      if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
      }
      return p;
    };

    const q =
      luminosity < 0.5
        ? luminosity * (1 + saturation)
        : luminosity + saturation - luminosity * saturation;
    const p = 2 * luminosity - q;
    red = Math.round(hue2rgb(p, q, hue + 1 / 3) * 255);
    green = Math.round(hue2rgb(p, q, hue) * 255);
    blue = Math.round(hue2rgb(p, q, hue - 1 / 3) * 255);
  }

  return { red, green, blue };
};
