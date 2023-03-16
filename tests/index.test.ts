import * as dotenv from "dotenv";
dotenv.config();
import { Atlas } from "../src";
import { expect } from "chai";

describe("Atlas", () => {
  it("Testing FindOne", async () => {
    const atlasAPI = new Atlas({
      dataSource: process.env.DATA_SOURCE || "",
      database: process.env.DATABASE || "",
      apiKey: process.env.API_KEY || "",
      collection: process.env.COLLECTION || "",
      apiUrl: process.env.API_URL || "",
    });

    const response = await atlasAPI.findOne({
      filter: { accountId: "gregavola" },
    });

    expect(response.document.accountId).to.equal("gregavola");
  });
});
