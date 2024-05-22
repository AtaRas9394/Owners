import { Client } from '@notionhq/client';

export default async function getBlogAll(dbId) {
  const notion = new Client({
    auth: "secret_iEdKNA0AUd5HoqubyYa2EU2X3Q1WPbCz1Sxs4zBrRLb",
  });

  return await notion.databases.query({
    database_id: dbId,
    header:""


  });
}