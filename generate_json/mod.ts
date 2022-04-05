import { parse } from "https://deno.land/std@0.133.0/flags/mod.ts";
import { resolve } from "https://deno.land/std@0.133.0/path/mod.ts";
import { colorfull, colorless } from "./themes.ts";
import { stringifyTheme } from "./stringify.ts";

const { dist: distDirPath, atom: atomDirPath } = parse(Deno.args);

const colorfullIconThemePath = resolve(
  distDirPath,
  "./file-icons-icon-theme.json",
);
const colorlessIconThemePath = resolve(
  distDirPath,
  "./file-icons-colourless-icon-theme.json",
);

// normal(colorfull) theme
await Deno.writeTextFile(
  colorfullIconThemePath,
  stringifyTheme(await colorfull()),
);

// colorless theme
await Deno.writeTextFile(
  colorlessIconThemePath,
  stringifyTheme(await colorless()),
);
