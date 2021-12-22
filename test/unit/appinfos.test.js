const appInfoController = require("../../src/controllers/appInfos");
const appInfoModel = require("../../src/models/Appinfo");

const nsmallGoogle = require("../../data/nsmallgoogle.json");

appInfoModel.findGoogleById = jest.fn();

describe("Google Playstore", () => {
  describe("Get AppInfo", () => {
    it("should have a getGoogleAppInfoByAppId function", () => {
      //Assert
      expect(appInfoController.getGoogleAppInfoByAppId).toBeInstanceOf(
        Function
      );
    });
    it("should call Appinfo.getGoogleAppInfoByAppId", async () => {
      //Arrange
      const req = {
        appId: "com.nsmobilehub",
        lang: "ko",
      };
      //Act
      await appInfoController.getGoogleAppInfoByAppId(req);
      //Assert
      expect(appInfoModel.findGoogleById).toHaveBeenCalledWith(req);
    });
    it("should call google app info", async () => {
      //Arrange
      const req = {
        appId: "com.nsmobilehub",
        lang: "ko",
      };
      appInfoModel.findGoogleById.mockReturnValue(nsmallGoogle);
      //Act
      const res = await appInfoController.getGoogleAppInfoByAppId(req);
      //Assert
      expect(res.title).toBe("NS홈쇼핑");
    });
  });
});
//Arrange
//Act
//Assert
