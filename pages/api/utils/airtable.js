import Airtable from 'airtable';

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});
const base = Airtable.base(process.env.AIRTABLE_BASE_ID);
const table = base(process.env.AIRTABLE_TABLE_NAME);

const getMinifiedRecords = (records) => {
  return records.map((record) => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

async function getAllEntries() {
  const records = await table.select().all();

  const minifiedRecords = await getMinifiedRecords(records);

  return minifiedRecords;
}

async function getAllPaths() {
  const posts = await getAllEntries();

  return posts.map((post) => {
    return {
      params: {
        id: post.fields.uid,
      },
    };
  });
}

async function getEntryData(id) {
  const records = await table
    .select({
      maxRecords: 1,
      filterByFormula: `{uid} = "${id}"`,
    })
    .all();

  const post = await getMinifiedRecords(records);

  return {
    post,
  };
}

export { table, getMinifiedRecords, getAllEntries, getAllPaths, getEntryData };
