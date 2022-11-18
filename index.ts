const fs = require("fs");

const readFileList = fs.readdir("./problem", (err, files) => {
  console.log("fiels", files);
});
