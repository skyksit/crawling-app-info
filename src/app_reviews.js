let playstore = require("google-play-scraper");
let appstore = require("app-store-scraper");

// playstore
//   .reviews({
//     appId: "com.nsmobilehub",
//     sort: gplay.sort.NEWEST,
//     lang: 'ko',
//     country: 'kr',
//     num: 10,
//     paginate: true,
//     nextPaginationToken: null, // you can omit this parameter
//   })
//   .then(console.log, console.log);

appstore
  .reviews({
    id: "405015280",
    sort: appstore.sort.RECENT,
    country: "kr",
    page: 1,
  })
  .then(console.log)
  .catch(console.log);
