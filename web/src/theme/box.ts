import { defineStyleConfig } from "@chakra-ui/react";

export const Box = {
  baseStyle: {
    fontWeight: "bold",
  },
  variants: {
    sidebar: {
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
};
