import { table } from './utils/airtable.js';

const handler = async (res, res) => {
  try {
    const records = await table.select().firstPage();
    console.log(records);
    res.statusCode = 200;
    res.json(records);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ msg: 'Something went wrong' });
  }
};

export default handler;
