"use strict";
const appinfoModel = require("../models/Appinfo");

// exports.getAppstoreInfo = async (req) => {};

exports.getGoogleAppInfoByAppId = async (req) => {
  try {
    const appInfo = await appinfoModel.findGoogleById(req);
    return appInfo;
  } catch (error) {
    return error;
  }
};

exports.getGoogleAppReviewsByAppId = async (req) => {
  try {
    const appReviews = await appinfoModel.findGoogleReviewsById(req);
    return appReviews;
  } catch (error) {
    return error;
  }
};

// exports.getAppInfoFromGoogleByAppId = async (req) => {
//   try{
//     const appInfo = await appinfoModel.getAppInfoFromGoogleByAppId(req);
//     return appInfo;
//   } catch (error) {
//     console.log(error);
// };

// exports.getPlaystoreInfo = async (req) => {
//   let res = appinfoModel.getGoogleAppInfo(req);
//   return res;
// };

// exports.getGoogleReviews = async (req) => {
//   let res = appinfoModel.getReviews(req);
//   return res;
// };
