import * as dotenv from "dotenv";
dotenv.config();
import Atlas from "../dist/src/index";
import { assert, expect } from "chai";
import { AtlasContructorProps } from "../dist/lib/types";

const options = {
  dataSource: process.env.DATA_SOURCE || "",
  database: process.env.DATABASE || "",
  apiKey: process.env.API_KEY || "",
  collection: process.env.COLLECTION || "",
  apiUrl: process.env.API_URL || "",
} as AtlasContructorProps;

describe("Atlas", () => {
  it("Testing Config", async () => {
    assert.isObject(options, "Options is not an Object");
    assert.isDefined(options.apiUrl, "API Url is not defined");
    assert.isDefined(options.dataSource, "Data Source is not defined");
  });

  it("Testing FindOne", async () => {
    const atlasAPI = new Atlas(options);

    const response = await atlasAPI.findOne({
      filter: { accountId: "gregavola" },
    });

    expect(response.document.accountId).to.equal("gregavola");
  });

  it("Insert One", async () => {
    const atlasAPI = new Atlas(options);

    const response = await atlasAPI.insertOne({
      collection: "test-collection",
      document: {
        test: 1,
        createdAt: new Date(),
      },
    });

    expect(response.insertedId).exist;
  });
});
