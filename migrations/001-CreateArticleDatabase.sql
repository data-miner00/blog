-- Up
CREATE TABLE "Cheers" (
	"id"	INTEGER NOT NULL UNIQUE,
	"article_id"	TEXT NOT NULL UNIQUE,
	"cheers"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT)
);

-- Down
DROP TABLE "Cheers";
