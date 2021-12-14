const appinfoModel = require("../models/Appinfo");

// exports.getAppstoreInfo = async (req) => {};

exports.getPlaystoreInfo = async (req) => {
  let res = appinfoModel.getGoogleAppInfo(req);
  return res;
};

exports.getGoogleReviews = async (req) => {
  let res = appinfoModel.getReviews(req);
  return res;
};