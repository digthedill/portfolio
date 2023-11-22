const fs = require("fs");
const ejs = require("ejs");
const yaml = require("js-yaml");
const path = require("path");
require("dotenv").config();

const configPath = process.cwd() + "/_site/admin/config.yml";

const configTemplate = fs.readFileSync(configPath, "utf8");
const configString = ejs.render(configTemplate);

try {
  fs.writeFileSync(configPath, configString);
} catch (e) {
  console.log(e);
}
