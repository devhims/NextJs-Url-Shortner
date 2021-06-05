import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { getAllPaths, getEntryData } from '../pages/api/utils/airtable';

const LinkPage = ({ entry }) => {
  const router = useRouter();
  console.log(entry);

  if (!entry) return null;
  const url = entry.post[0].fields.link;

  useEffect(() => {
    router.replace(url);
  }, []);

  return null;
};

export const getStaticPaths = async () => {
  const paths = await getAllPaths();
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const data = await getEntryData(context.params.id);
  return {
    props: {
      entry: data,
    },
  };
};

export default LinkPage;
