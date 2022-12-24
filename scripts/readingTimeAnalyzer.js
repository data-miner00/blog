var fs = require("fs");
var rt = require("reading-time");
var contentPath = "./data/article.txt";

function main() {
  if (!fs.existsSync(contentPath)) {
    fs.mkdirSync(contentPath);
    console.log(
      "'articles.txt' file has been created for you under the 'data' folder. Place contents of the article inside and run this script again."
    );
    return;
  }

  var content = fs.readFileSync(contentPath, { encoding: "utf-8" });
  console.log(rt(content));
}

main();
