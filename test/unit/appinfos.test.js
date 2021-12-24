const appInfoController = require("../../src/controllers/appInfos");
const appInfoModel = require("../../src/models/Appinfo");

const REQ_NSMALL = require("../data/req_nsmall.json");
const RES_NSMALL = require("../data/res_nsmall.json");

appInfoModel.findGoogleById = jest.fn();
appInfoModel.findGoogleReviewsById = jest.fn();

describe("Google Playstore", () => {
  describe("Get AppInfo", () => {
    //should exist getGoogleAppInfoByAppId function
    it("should have a getGoogleAppInfoByAppId function", () => {
      //Assert
      expect(appInfoController.getGoogleAppInfoByAppId).toBeInstanceOf(
        Function
      );
    });
    //should call findGoogleById when getGoogleAppInfoByAppId is called
    it("should call Appinfo.getGoogleAppInfoByAppId", async () => {
      //Arrange
      const req = REQ_NSMALL.googleApp;
      //Act
      await appInfoController.getGoogleAppInfoByAppId(req);
      //Assert
      expect(appInfoModel.findGoogleById).toHaveBeenCalledWith(req);
    });
    //should return a response object
    it("should call google app info", async () => {
      //Arrange
      const req = REQ_NSMALL.googleApp;
      appInfoModel.findGoogleById.mockReturnValue(RES_NSMALL.googleApp);
      //Act
      const res = await appInfoController.getGoogleAppInfoByAppId(req);
      //Assert
      expect(res.title).toBe("NS홈쇼핑");
    });
    //should handle errors or appinfo not found
    it("should handle errors", async () => {
      //Arrange
      const req = REQ_NSMALL.googleApp;
      const errorMessage = { message: "App not found (404)", status: 404 };
      appInfoModel.findGoogleById.mockReturnValue(errorMessage);
      //Act
      const res = await appInfoController.getGoogleAppInfoByAppId(req);
      //Assert
      expect(res.message).toBe("App not found (404)");
      expect(res.status).toBe(404);
    });
  });

  //Get AppReview from Google Playstore
  describe("Get AppReview", () => {
    //should exist getReviews function
    it("should have a getReviews function", () => {
      //Assert
      expect(appInfoController.getGoogleAppReviewsByAppId).toBeInstanceOf(
        Function
      );
    });
    //should call getGoogleAppReviewsByAppId when findGoogleReviewsById is called
    it("should call Appinfo findGoogleReviewsById", async () => {
      //Arrange
      const req = REQ_NSMALL.googleReviews;
      //Act
      await appInfoController.getGoogleAppReviewsByAppId(req);
      //Assert
      expect(appInfoModel.findGoogleReviewsById).toHaveBeenCalledWith(req);
    });
    //should return a response object
    it("should return json body in response", async () => {
      //Arrange
      const req = REQ_NSMALL.googleReviews;
      appInfoModel.findGoogleReviewsById.mockReturnValue(
        RES_NSMALL.googleReviews
      );
      //Act
      const res = await appInfoController.getGoogleAppReviewsByAppId(req);
      //Assert
      expect(res.data).toBeDefined();
      expect(res.data).toBeInstanceOf(Array);
      expect(res.nextPaginationToken).toBeDefined();
    });
    //should handle errors or appinfo not found
    it("should handle errors", async () => {
      //Arrange
      const req = REQ_NSMALL.googleReviews;
      const errorMessage = { data: [], nextPaginationToken: null };
      appInfoModel.findGoogleReviewsById.mockReturnValue(errorMessage);
      //Act
      const res = await appInfoController.getGoogleAppReviewsByAppId(req);
      //Assert
      expect(res.data).toBeDefined();
      expect(res.data).toBeInstanceOf(Array);
      expect(res.data.length).toBe(0);
      expect(res.nextPaginationToken).toBeNull();
    });
  });
});
//Arrange
//Act
//Assert
