#!/usr/bin/env node
const ghpages = require("gh-pages");
const path = require("path");

if (process.argv.length < 3) {
  console.log("Please specify a directory name you want to deploy as 1st argument");
  return;
}

console.log(`Deploying ${process.argv[2]} directory to Github pages...`);

ghpages.publish(path.join(__dirname, process.argv[2]), () => console.log("Deploy completed"));
