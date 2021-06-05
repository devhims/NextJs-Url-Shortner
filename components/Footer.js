import { Text } from '@chakra-ui/layout';

const Footer = () => {
  return (
    <>
      <Text as="span">Developed by </Text>
      <Text
        as="span"
        fontWeight="semibold"
        bgClip="text"
        bgGradient="linear(to-r, blue.500,purple.500)"
      >
        Himanshu Gupta
      </Text>
    </>
  );
};

export default Footer;
