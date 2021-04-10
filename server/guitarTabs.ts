import { FilterQuery } from "mongodb";
import { collection } from "./db";

export type Tab = {
  _id: string;
  category: string;
  title: string;
  artist: string;
  tex: string;
};

export async function findGuitarTabs(search?: string): Promise<Tab[]> {
  const regExp = new RegExp(search, "i");
  const query: FilterQuery<Tab> = {
    $or: [{ category: regExp }, { title: regExp }, { artist: regExp }],
  };

  const cursor = await collection<Tab>("GuitarTabs").find(query);
  const guitarTabs = await cursor.toArray();
  return guitarTabs;
}
