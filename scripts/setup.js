const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
const fs = require("fs");

async function setup() {
  const filename = "./data/db.sqlite";

  fs.closeSync(fs.openSync(filename, "w"));

  const db = await sqlite.open({
    filename,
    driver: sqlite3.Database,
  });
  await db.migrate({ migrationsPath: "./migrations", force: "last" });
}

setup();
