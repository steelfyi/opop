export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  tertiary: string;
  text: string;
}

export const themes: Record<string, ThemeColors> = {
  "1": {
    primary: "#1A003C",
    secondary: "#2F1352",
    tertiary: "#FF5F55",
    background: "#ffffff",
    text: "#000000",
  },
  "2": {
    primary: "#1F2040",
    secondary: "#4A4C7B",
    tertiary: "#6491D4",
    background: "#1F2040",
    text: "#00ff00",
  },
  "3": {
    primary: "#223E36",
    secondary: "#4B8373",
    tertiary: "#57C3C2",
    background: "#1F2040",
    text: "#00ff00",
  },
  "4": {
    primary: "#D8E3E7",
    secondary: "#C4D7DE",
    tertiary: "#8ABCD1",
    background: "#1F2040",
    text: "#00ff00",
  },
  "5": {
    primary: "#CCCCD6",
    secondary: "#BABAD4",
    tertiary: "#8076A3",
    background: "#1F2040",
    text: "#00ff00",
  },
  "6": {
    primary: "#DADFDE",
    secondary: "#A4CAB6",
    tertiary: "#A4CAB6",
    background: "#1F2040",
    text: "#00ff00",
  },
};
