const sqlite = require("sqlite");
import sqlite3 from "sqlite3";

export async function getCheers(articleId: string) {
  const db = await sqlite.open({
    filename: "./data/db.sqlite",
    driver: sqlite3.Database,
  });

  const record = await db.get("SELECT * FROM Cheers WHERE article_id = ?;", [
    articleId,
  ]);

  return record ? record.cheers : 0;
}
