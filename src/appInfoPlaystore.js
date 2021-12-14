"use strict";
let playstore = require("google-play-scraper");

const getAppInfoPlaystore = (findApp) => {
  return playstore.app(findApp);
};

module.exports = getAppInfoPlaystore;
