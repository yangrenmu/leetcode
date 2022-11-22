import * as fs from "fs";

const fileLink = "https://github.com/yangrenmu/leetcode/blob/master/problem/";
const outputFile = "README.md";

fs.readdir("./problem", (err, files) => {
  if (err) {
    console.log("error", err);
    return;
  }
  let content = "";
  if (files?.length > 0) {
    content = "### leetcode \n\n";
    files.forEach((v) => {
      if (!isNaN(+v[0])) {
        content += `* [${v}](${fileLink}${v}) \n`;
      }
    });
    fs.writeFileSync(outputFile, content);
  }
});

// node --loader ts-node/esm ./index.ts
