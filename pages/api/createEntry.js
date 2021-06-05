import { table } from './utils/airtable.js';

const handler = async (req, res) => {
  const entry = req.body;
  try {
    const createdRecords = await table.create([{ fields: entry.fields }]);
    const createdRecord = {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields,
    };
    res.status(200).json(createdRecord);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.status(500).json({ msg: 'Something went wrong' });
  }
};

export default handler;
