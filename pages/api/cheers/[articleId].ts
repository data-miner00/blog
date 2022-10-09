import { NextApiRequest, NextApiResponse } from "next";
const sqlite = require("sqlite");
import sqlite3 from "sqlite3";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await sqlite.open({
    filename: "./data/db.sqlite",
    driver: sqlite3.Database,
  });

  // const statement = await db.prepare('SQL');
  // const result = await statement.run();
  // result.finalize()
  if (["POST", "PUT"].includes(req.method)) {
    const record = await db.get("SELECT * FROM Cheers WHERE article_id = ?;", [
      req.query.articleId,
    ]);

    if (!record) {
      await db.run("INSERT INTO Cheers (article_id, cheers) VALUES (?, ?);", [
        req.query.articleId,
        1,
      ]);

      res.status(201).json({ data: "Successfully initialized record" });
    } else {
      await db.run(
        "UPDATE Cheers SET cheers = cheers + 1 WHERE article_id = ?;",
        [req.query.articleId]
      );

      res.status(200).json({ data: "Successfully added claps" });
    }
  } else if (req.method === "GET") {
    const record = await db.get("SELECT * FROM Cheers WHERE article_id = ?;", [
      req.query.articleId,
    ]);

    if (!record) {
      res.status(200).json({ cheers: 0 });
    } else {
      res.status(200).json({ cheers: record?.cheers });
    }
  } else {
    res.status(400).json({ message: `${req.method} is not supported` });
  }
};
