import { Db, MongoClient } from "mongodb";

export type Tab = {
  _id: string;
  category: string;
  tex: string;
};

let client: MongoClient = null;
let db: Db = null;

export async function connect(url: string) {
  if (db) {
    return;
  }
  // Use connect method to connect to the server
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db();
}

export function close() {
  if (!client) {
    throw new Error("Database is not connected");
  }
  return client.close();
}

export function collection<schema>(name: string) {
  if (!db) {
    throw new Error("Database is not connected");
  }
  return db.collection<schema>(name);
}
