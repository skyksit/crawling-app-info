let playstore = require("google-play-scraper");
let appstore = require("app-store-scraper");

function appInfoFromPlaystore(id) {}
// playstore
//   .app({
//     appId: "com.nsmobilehub",
//     country: "kr",
//     lang: "ko",
//   })
//   .then(console.log, console.log);

playstore
  .app({
    appId: "com.glyde.app.android",
    country: "kr",
    lang: "ko",
  })
  .then(console.log, console.log);

// appstore
//   .app({
//     id: 405015280,
//     country: "kr",
//   })
//   .then(console.log)
//   .catch(console.log);

// appstore
//   .developer({ devId: 405015283, country: "kr" })
//   .then(console.log)
//   .catch(console.log);
