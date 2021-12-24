const appInfoController = require("../../src/controllers/appInfos");
const REQ_NSMALL = require("../data/req_nsmall.json");

describe("Appinfo Integration Test", () => {
  //Get AppInfo from Google Playstore
  it("Get NSmall AppInfo from Google", async () => {
    //Arrange
    const req = REQ_NSMALL.googleApp;
    //Act
    const res = await appInfoController.getGoogleAppInfoByAppId(req);
    //Assert
    expect(res.title).toBe("NS홈쇼핑");
  });

  //Get AppReviews from Google Playstore
  it("Get NSmall AppReviews from Google", async () => {
    //Arrange
    const req = REQ_NSMALL.googleReviews;
    //Act
    const res = await appInfoController.getGoogleAppReviewsByAppId(req);
    //Assert
    console.log(res);
    expect(res.data).toBeDefined();
    expect(res.data).toBeInstanceOf(Array);
    expect(res.data[0].score).toBeLessThanOrEqual(5);
    expect(res.nextPaginationToken).toBeDefined();
  });
});
