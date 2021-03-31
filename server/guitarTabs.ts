import { FilterQuery } from "mongodb";
import { collection } from "./db";

export type GuitarTab = {
  category: string;
  tex: string;
};

export async function findGuitarTabs(search?: string): Promise<GuitarTab[]> {
  const regExp = new RegExp(search, "i");
  const query: FilterQuery<GuitarTab> = {
    $or: [{ category: regExp }, { tex: regExp }],
  };

  const cursor = await collection<GuitarTab>("GuitarTabs").find(query);
  const guitarTabs = await cursor.toArray();
  return guitarTabs;
}
