import { table } from './utils/airtable.js';

const handler = (res, res) => {
  try {
    const records = await table.select().firstPage(); //20 records
    //const formattedRecords = minifyRecords(records);
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
