// TODO: build from atoms/styles/colours.less
import chroma from "https://cdn.skypack.dev/chroma-js@2.4.2?dts";

const base = {
  red: "#ac4142",
  green: "#90a959",
  yellow: "#f4bf75",
  blue: "#6a9fb5",
  maroon: "#8f5536",
  purple: "#aa759f",
  orange: "#d28445",
  cyan: "#75b5aa",
  pink: "#ff00cc",
  grey: "#7f7f7f",
};

export const darken = (base: string, amount: number) => {
  const [h, s, l] = chroma(base).hsl();
  return chroma([h, s, l + amount], "hsl").hex();
};
export const lighten = (base: string, amount: number) => {
  const [h, s, l] = chroma(base).hsl();
  return chroma([h, s, l - amount], "hsl").hex();
};
export const buildColorfulColors = () => ({
  ...base,
  // red
  "medium-red": base.red,
  "light-red": lighten(base.red, 0.15),
  "dark-red": darken(base.red, 0.15),
  // green
  "medium-green": base.green,
  "light-green": lighten(base.green, 0.15),
  "dark-green": darken(base.green, 0.15),
  // yellow
  "medium-yellow": base.yellow,
  "light-yellow": lighten(base.yellow, 0.15),
  "dark-yellow": darken(base.yellow, 0.15),
  // blue
  "medium-blue": base.blue,
  "light-blue": lighten(base.blue, 0.15),
  "dark-blue": darken(base.blue, 0.15),
  // maroon
  "medium-maroon": base.maroon,
  "light-maroon": lighten(base.maroon, 0.15),
  "dark-maroon": darken(base.maroon, 0.15),
  // purple
  "medium-purple": base.purple,
  "light-purple": lighten(base.purple, 0.15),
  "dark-purple": darken(base.purple, 0.15),
  // orange
  "medium-orange": base.orange,
  "light-orange": lighten(base.orange, 0.15),
  "dark-orange": darken(base.orange, 0.15),
  // cyan
  "medium-cyan": base.cyan,
  "light-cyan": lighten(base.cyan, 0.15),
  "dark-cyan": darken(base.cyan, 0.15),
  // pink
  "medium-pink": base.pink,
  "light-pink": lighten(base.pink, 0.15),
  "dark-pink": darken(base.pink, 0.15),
  // grey
  "medium-grey": base.grey,
  "light-grey": lighten(base.grey, 0.15),
  "dark-grey": darken(base.grey, 0.15),
});
