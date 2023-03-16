# Atlas MongoDB Data API using Fetch

## Context

If you want to use Edge Functions in Vercel, you can't use the native MongoDB client, because it has NodeJS function that are not supported. This library uses the Data API from Atlas MongoDB to make requests over HTTP to query your database, letting us use Edge function nicely without warmup time.

The existing library, uses Axios, which isn't support Edge functions and this library uses `fetch` to make the HTTP request.

## Docmentation

All methods `find`, `findOne`, `updateOne`, `updateMany`, `aggegate`, `deleteOne`, `deleteMany`, `replaceOne` are supported. You can find more documentation on Mongo's website here: https://www.mongodb.com/docs/atlas/api/data-api-resources

### Initalizing

```
const atlasAPI = new Atlas({
    dataSource: "YOUR_DATASOURCE_NAME",
    database: "YOUR_DATABASE_NAME",
    apiKey: "YOUR_API_KEY",
    apiUrl: "BASE_URL_API"
})
```

### Setting the Collection

You can set the collection in the initalization for all requests, by passing `collection` prop, or you can set the `setCollection` method afterwards.

You can also set the collection in the query request as a prop.

### Getting Data

`await atlasAPI.find({
collection: "users",
filter: {userId: 1}
})
