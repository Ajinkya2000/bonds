import { ChakraProvider, Box } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import theme from '@/utils/theme';
import { roboto } from "@/utils/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Box className={roboto.className}>
      <Component {...pageProps} />
    </Box>
  </ChakraProvider>
}
