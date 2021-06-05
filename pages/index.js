import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import {
  Text,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Flex,
  HStack,
  CircularProgress,
  Center,
  VStack,
  Link,
  Box,
  Heading,
} from '@chakra-ui/react';

import { nanoid } from 'nanoid';

import { getAllEntries } from '../pages/api/utils/airtable';

import { useRouter } from 'next/router';

export default function Home({ allEntries }) {
  const router = useRouter();
  // console.log(allEntries);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [originalUrl, setOriginalUrl] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const handleChange = (event) => setValue(event.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOriginalUrl(value);
    setLoading(true);

    const entry = {
      fields: {
        uid: nanoid(5),
        link: value,
      },
    };

    try {
      const res = await fetch('/api/createEntry', {
        method: 'POST',
        body: JSON.stringify(entry),
        headers: { 'Content-Type': 'application/json' },
      });
      const newEntry = await res.json();
      console.log(newEntry);
      // router.replace(`/${newEntry.fields.uid}`);
      setNewUrl('https://xsurl.vercel.app/' + newEntry.fields.uid);
      setValue('');
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <>
      <VStack mt={7} spacing={5} align="left">
        <Center>
          <Heading colorScheme="facebook">XSURL Shortner</Heading>
        </Center>
        <InputGroup size="md">
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Paste the URL to shorten"
            colorScheme="facebook"
          />
          <Button colorScheme="facebook" onClick={handleSubmit}>
            Submit
          </Button>
        </InputGroup>
        {loading && (
          <Center>
            <CircularProgress isIndeterminate color="green.300" />
          </Center>
        )}
        {!loading && newUrl && (
          <Box>
            <Text>
              Original Url:{' '}
              <Link color="teal.500" isExternal href={originalUrl}>
                {originalUrl}
              </Link>
            </Text>
            <Text>
              Shortened Url:{' '}
              <Link color="teal.500" isExternal href={newUrl}>
                {newUrl}
              </Link>
            </Text>
          </Box>
        )}
        {!loading && newUrl && originalUrl.length - newUrl.length > 0 && (
          <Center>
            <Text>
              {`New url is ${
                originalUrl.length - newUrl.length
              } characters shorter
                than the original url`}
            </Text>
          </Center>
        )}
      </VStack>
    </>
  );
}

export const getServerSideProps = async () => {
  const allEntries = await getAllEntries();

  return {
    props: {
      allEntries,
    },
  };
};
