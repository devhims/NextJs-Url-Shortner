import '../styles/globals.css';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex align="center" justify="center" my={5} mx={{ base: 3, md: 5 }}>
        <Flex
          maxW={{ base: '95vw', md: '80vw', lg: '50vw' }}
          w="100%"
          direction="column"
        >
          <Header />
          <Component {...pageProps} />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
