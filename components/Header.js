// import Icon from '@chakra-ui/icon';
import {
  Flex,
  HStack,
  Text,
  IconButton,
  ScaleFade,
  Tooltip,
  Link,
} from '@chakra-ui/react';
import { SiGithub } from 'react-icons/si';
import ThemeToggle from '../components/ThemeToggle';

const Header = () => {
  return (
    <Flex w="full" justify="flex-end">
      <HStack>
        <ThemeToggle />
        <Tooltip label="Github repo" aria-label="A tooltip">
          <Link
            isExternal
            href={'https://github.com/devhims/NextJs-Url-Shortner'}
          >
            <IconButton
              colorScheme="facebook"
              aria-label="Github repo"
              variant="outline"
              icon={
                <ScaleFade in>
                  <SiGithub size={18} />
                </ScaleFade>
              }
            />
          </Link>
        </Tooltip>
      </HStack>
    </Flex>
  );
};

export default Header;
