import { NextApiRequest, NextApiResponse } from "next";
import { findGuitarTabs } from "../../server/guitarTabs";
import { withDatabase } from "../../server/utils";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { search } = req.query;
    if (Array.isArray(search)) {
      return res.status(400).end();
    }

    const guitarTabs = await findGuitarTabs(search);
    res.status(200).json(guitarTabs);
  }
);
