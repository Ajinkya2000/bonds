import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    gray: {
      250: "#FAFAFA",
      350: "#EEEEEE",
      425: "#757575",
      450: "#919191",
      550: "#D1D8DC",
      650: "#3A474E",
      750: "#4B4B4B",
    },
    blue: {
      250: "#C0E0F8",
      550: "#1472c4",
    },
    green: {
      150: "#CEE5CC",
      650: "#457B3C",
    },
    red: {
      150: "#F7CFD3",
      650: "#B63831",
    }
  }
});

export default theme;