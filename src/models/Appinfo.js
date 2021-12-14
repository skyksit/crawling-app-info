const playstore = require("google-play-scraper");
// const appstore = require("app-store-scraper");

const Appinfo = {
  getGoogleAppInfo: async (options) => {
    return playstore.app(options);
  },
  getReviews: async (options) => {
    return playstore.reviews(options);
  },
};

module.exports = Appinfo;
