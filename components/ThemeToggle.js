import React from 'react';
import {
  IconButton,
  useColorMode,
  ScaleFade,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import useSound from 'use-sound';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [play] = useSound('/lightswitch.mp3', {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const handleClick = () => {
    toggleColorMode();
    colorMode === 'dark' ? play({ id: 'on' }) : play({ id: 'off' });
  };

  return (
    <Tooltip
      label={useColorModeValue('Dark mode', 'Light mode')}
      aria-label="A tooltip"
    >
      <IconButton
        colorScheme="facebook"
        aria-label="Switch theme"
        variant="outline"
        icon={
          colorMode === 'dark' ? (
            <ScaleFade in>
              <HiOutlineSun size={18} />
            </ScaleFade>
          ) : (
            <ScaleFade in>
              <HiOutlineMoon size={18} />
            </ScaleFade>
          )
        }
        onClick={handleClick}
      />
    </Tooltip>
  );
};
export default ThemeToggle;
