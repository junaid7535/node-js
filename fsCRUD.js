const fs = require('fs');

fs.writeFileSync("files/apple.txt","this is a fruit");

const data = fs.readFileSync("files/apple.txt","utf-8");
console.log(data);