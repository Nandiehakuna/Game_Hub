import { defineConfig, createSystem } from "@chakra-ui/react";

const theme = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "0C0C0C" },
        secondary: { value: "#fff" },
      },
    },
  },
});

const system = createSystem(theme);

export default system;
