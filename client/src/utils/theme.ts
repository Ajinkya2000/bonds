import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    gray: {
      250: "#FAFAFA",
      450: "#919191",
      750: "#4B4B4B",
    },
    blue: {
      250: "#C0E0F8",
      550: "#1472c4"
    }
  }
});

export default theme;