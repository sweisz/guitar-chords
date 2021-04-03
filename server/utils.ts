import type { NextApiRequest, NextApiResponse } from "next";
import { connect } from "./db";

type Handler = (req: NextApiRequest, res: NextApiResponse) => void;

export function withDatabase(handler: Handler) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    await connect(process.env.MONGODB_URI);
    return handler(req, res);
  };
}
