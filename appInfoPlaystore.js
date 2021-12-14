const getAppInfo = require("./src/appInfoPlaystore");

const rightAppInfo = {
  appId: "com.nsmobilehub",
  country: "kr",
  lang: "ko",
};

const wrongAppInfo = {
  appId: "com.nsmobilehub.dummy",
};

describe("app info", () => {
  test("getting app info", () => {
    return getAppInfo(rightAppInfo).then((data) => {
      expect(data.url).toContain(
        "https://play.google.com/store/apps/details?id"
      );
    });
  });

  test("getting app info failed", () => {
    return getAppInfo(wrongAppInfo).catch((err) => {
      expect(err.message).toBe("App not found (404)");
    });
  });
});
