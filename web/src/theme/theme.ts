import { extendTheme } from "@chakra-ui/react";
import { colors } from "./color";
import { Box } from "./box";
const theme = extendTheme({
  components: {
    Box: {
      variants: {
        "sidebar-box": {
          w: "100%",
          h: "2.5em",
          display: "flex",
          flexDir: "row",
          borderRadius: "0.5em",
          transition: "transform .3s",
          _hover: {
            bgColor: "#F99B2A",
            boxShadow: "lg",
            transform: "scale(1.05)",
          },
        },
      },
    },
  },
  colors,
});

export default theme;
