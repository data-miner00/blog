const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

async function setup() {
  const db = await sqlite.open({
    filename: "./data/db.sqlite",
    driver: sqlite3.Database,
  });
  await db.migrate({ migrationsPath: "./migrations", force: "last" });
}

setup();
