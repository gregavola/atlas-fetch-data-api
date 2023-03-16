import { Atlas } from "../src";

const runTest = async () => {
  const atlasAPI = new Atlas({
    dataSource: "test",
    database: "test",
    apiKey: "test",
    collection: "test",
    apiUrl:
      "https://us-east-1.aws.data.mongodb-api.com/app/XXX/endpoint/data/v1",
  });

  console.log(atlasAPI);
  process.exit();
};

runTest();
