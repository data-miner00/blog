import { NextApiRequest, NextApiResponse } from "next";

import { getCheers, incrementCheers } from "../../../services/getCheersClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (["POST", "PUT"].includes(req.method)) {
      await incrementCheers(req.query.articleId as string);
      res.status(200).json({ message: "Successfully added claps" });
    } else if (req.method === "GET") {
      const cheers = await getCheers(req.query.articleId as string);
      res.status(200).json({ cheers });
    } else {
      res.status(400).json({ message: `${req.method} is not supported` });
    }
  } catch (error) {
    res.status(500).json({ message: `An error occurred: ${error}` });
  }
};
