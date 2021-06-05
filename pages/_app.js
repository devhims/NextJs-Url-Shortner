import '../styles/globals.css';
import { Box, Center, ChakraProvider, Flex, Spacer } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box textAlign="center" h="100vh" w="100vw">
        <Center w="inherit" h="inherit">
          <Flex
            maxW={{ base: '95vw', md: '80vw', lg: '50vw' }}
            py={5}
            mx={{ base: 3, md: 5 }}
            w="100%"
            h="100%"
            direction="column"
            justify="center"
          >
            <Box>
              <Header />
              <Component {...pageProps} />
            </Box>
            <Spacer />
            <Box>
              <Footer />
            </Box>
          </Flex>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
