import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import {
  ColorScheme,
  colors,
  extendTheme,
  VechaiTheme,
  VechaiProvider,
} from "@vechaiui/react";

const bee: ColorScheme = {
  id: "bee",
  type: "light",
  colors: {
    bg: {
      base: colors.warmGray["100"],
      fill: colors.warmGray["100"],
    },
    text: {
      foreground: colors.warmGray["900"],
      muted: colors.warmGray["700"],
    },
    primary: colors.amber,
    neutral: colors.warmGray,
  },
};

const theme: VechaiTheme = extendTheme({
  cursor: "pointer",
  rounded: "0.25rem",
  colorSchemes: {
    bee,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <VechaiProvider theme={theme} colorScheme="bee">
        <Component {...pageProps} />
      </VechaiProvider>
    </>
  );
}

export default MyApp;
