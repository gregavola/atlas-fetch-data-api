import { Atlas } from "../src";

const runTest = async () => {
  const atlasAPI = new Atlas({
    dataSource: "test",
    database: "test",
    apiKey: "test",
    collection: "test",
    apiUrl:
      "https://us-east-1.aws.data.mongodb-api.com/app/data-fnmwe/endpoint/data/v1",
  });

  const response = await atlasAPI.findOne({
    filter: {
      userId: "test",
    },
  });

  console.log(response);
  process.exit();
};

runTest();
