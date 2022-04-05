import { createRequire } from "https://deno.land/std@0.130.0/node/module.ts";
// import { parseRegExp } from "./parse_regexp.ts";
import { buildColorfulColors } from "./colors.ts";

const colorfulTheme = buildColorfulColors();

const require = createRequire(import.meta.url);
const iconDB = require("../atom/lib/icons/.icondb.js");
export const parseIconDB = () => {
  const [[dirIcons], [fileIcons]] = iconDB;

  for (const [rawIconId, rawColors, rawMatch, , matchPath] of fileIcons) {
    if (matchPath || !(rawMatch instanceof RegExp)) {
      continue;
    }
    // HACK
    if (/^\.atom-socket-.+\.\d$/.source === rawMatch.source) {
      continue;
    }
    // HACK: Conflicting file-extension: `.vh` (V, SystemVerilog)
    // Searching GitHub yields mostly Verilog results, so exclude V.
    if ("v-icon" === rawIconId && /\.vh$/i.source === rawMatch.source) {
      continue;
    }

    const iconId = normalizeIconId(rawIconId);
    const colors = normalizeColors(rawColors);
    const match = normalizeMatch(rawMatch);

    // const matches = parseRegExp(match);

    console.log(iconId, colors, match, matchPath);
  }
};

export const normalizeIconId = (id: string) => {
  if (id.startsWith("icon-file-")) return id.slice(10);
  if (id.startsWith("icon-")) return id.slice(5);
  if (id.endsWith("-icon")) return id.slice(0, -5);
  if (id.startsWith("_")) return id.slice(1);
  return id;
};

export const normalizeColors = (
  colors: (string | null)[],
): (string | null)[] => {
  if (colors[0] === colors[1]) return [colors[0]];
  return colors;
};

export const normalizeMatch = (match: RegExp) =>
  new RegExp(
    match.source
      .replace(/^\^stdlib\(\?:-\.\+\)\?/, "^stdlib")
      .replace(/(?<!\\)\|\(\?<[!=][^()]+\)/g, "")
      .replace(/(?<!\\)\(\?:(?:\[-\._\]\?|_)\\[wd][+*]\)\?/g, ""),
    match.flags,
  );

export const getColor = (key: string | null, theme: Record<string, string>) => {
  if (!key || !(key in theme)) return null;
  return theme[key];
};
