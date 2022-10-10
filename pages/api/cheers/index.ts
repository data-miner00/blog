import { NextApiRequest, NextApiResponse } from "next";
const sqlite = require("sqlite");
import sqlite3 from "sqlite3";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(400).json({ message: `${req.method} is not supported` });
    return;
  }

  try {
    const db = await sqlite.open({
      filename: "./data/db.sqlite",
      driver: sqlite3.Database,
    });

    const cheers = await db.all("SELECT * FROM Cheers;");

    res.status(200).json({ data: cheers });
  } catch (error) {
    res.status(500).json({ error });
  }
};
