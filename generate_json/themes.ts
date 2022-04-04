export type Theme = {
  fonts: {
    id: string;
    src: { path: string; format: string }[];
    weight: string;
    style: string;
    size: string;
  }[];
  file: string;
  folder: string;
  folderExpanded: string;
  rootFolder: string;
  rootFolderExpanded: string;
};

export const commom: Pick<
  Theme,
  | "fonts"
  | "file"
  | "folder"
  | "folderExpanded"
  | "rootFolder"
  | "rootFolderExpanded"
> = {
  "fonts": [
    {
      "id": "file-icons",
      "src": [
        {
          "path": "./file-icons.woff2",
          "format": "woff2",
        },
      ],
      "weight": "normal",
      "style": "normal",
      "size": "100%",
    },
    {
      "id": "fontawesome",
      "src": [
        { "path": "./fontawesome.woff2", "format": "woff2" },
      ],
      "weight": "normal",
      "style": "normal",
      "size": "100%",
    },
    {
      "id": "octicons",
      "src": [
        { "path": "./octicons.woff2", "format": "woff2" },
      ],
      "weight": "normal",
      "style": "normal",
      "size": "100%",
    },
    {
      "id": "mfixx",
      "src": [
        { "path": "./mfixx.woff2", "format": "woff2" },
      ],
      "weight": "normal",
      "style": "normal",
      "size": "100%",
    },
    {
      "id": "devopicons",
      "src": [
        { "path": "./devopicons.woff2", "format": "woff2" },
      ],
      "weight": "normal",
      "style": "normal",
      "size": "100%",
    },
  ],
  "file": "_file",
  "folder": "_folder",
  "folderExpanded": "_folder",
  "rootFolder": "_fd_root",
  "rootFolderExpanded": "_fd_root_open",
};

export const colorfull = (): Theme => ({ ...commom });

export const colorless: () => Theme = () => ({ ...commom });
