import { NextApiRequest, NextApiResponse } from "next";
import { findGuitarTabs } from "../../server/guitarTabs";
import { withDatabase } from "../../server/utils";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const guitarTabs = await findGuitarTabs();
    res.status(200).json(guitarTabs);
  }
);
