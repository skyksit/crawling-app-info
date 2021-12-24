"use strict";
const playstore = require("google-play-scraper");
// const appstore = require("app-store-scraper");

const Appinfo = {
  findGoogleById: async (req) => {
    return playstore.app(req);
  },
  findGoogleReviewsById: async (req) => {
    return playstore.reviews(req);
  },
};

module.exports = Appinfo;
