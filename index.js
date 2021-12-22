const appInfoController = require("./src/controllers/appInfos");

const NSMALL = {
  appId: "com.nsmobilehub",
  lang: "ko",
};

const NSMALL_REVIEW = {
  appId: "com.nsmobilehub",
  sort: 2,
  num: 1,
  country: "kr",
  lang: "ko",
};

const GLYDE = {
  appId: "com.glyde.app.android",
  lang: "ko",
};


appInfoController
  .getGoogleAppInfoByAppId(NSMALL)
  .then(function (data) {
    // console.log(data); // response 값 출력
    console.log(data.title);
    console.log(`download count = ${data.maxInstalls}`);
    console.log(`score = ${data.score}`);
  })
  .catch(function (err) {
    console.error(err); // Error 출력
  });

// appInfoController
//   .getGoogleReviews(NSMALL_REVIEW)
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });