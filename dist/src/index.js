"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atlas = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class Atlas {
    constructor({ dataSource, database, apiKey, apiUrl, collection, }) {
        this.setCollection = (collection) => {
            Atlas.collection = collection;
        };
        this.makeRequest = async (payload, action) => {
            const url = `${Atlas.apiUrl}/action/${action}`;
            const response = await (0, node_fetch_1.default)(url, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    apiKey: Atlas.apiKey,
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            if (response.status != 200) {
                const { error } = await response.json();
                throw new Error(error);
            }
            else {
                return await response.json();
            }
        };
        this.findOne = async ({ collection, filter, }) => {
            return this.makeRequest({
                dataSource: Atlas.dataSource,
                database: Atlas.database,
                collection: collection || Atlas.collection,
                filter,
            }, "findOne");
        };
        this.insertOne = async ({ collection, document, }) => {
            return this.makeRequest({
                dataSource: Atlas.dataSource,
                database: Atlas.database,
                collection: collection || Atlas.collection,
                document,
            }, "insertOne");
        };
        this.insertMany = async ({ collection, documents, }) => {
            return this.makeRequest({
                dataSource: Atlas.dataSource,
                database: Atlas.database,
                collection: collection || Atlas.collection,
                documents,
            }, "insertMany");
        };
        this.updateOne = async ({ collection, filter, update, upsert, }) => {
            return this.makeRequest({
                dataSource: Atlas.dataSource,
                database: Atlas.database,
                collection: collection || Atlas.collection,
                filter,
                update,
                upsert,
            }, "updateOne");
        };
        this.updateMany = async ({ collection, filter, update, upsert, }) => {
            return this.makeRequest({
                dataSource: Atlas.dataSource,
                database: Atlas.database,
                collection: collection || Atlas.collection,
                filter,
                update,
                upsert,
            }, "updateMany");
        };
        this.replaceOne = async ({ collection, filter, replace, upsert, }) => {
            return this.makeRequest({
                dataSource: Atlas.dataSource,
                database: Atlas.database,
                collection: collection || Atlas.collection,
                filter,
                replace,
                upsert,
            }, "updateOne");
        };
        this.deleteOne = async ({ collection, filter, }) => {
            return this.makeRequest({
                dataSource: Atlas.dataSource,
                database: Atlas.database,
                collection: collection || Atlas.collection,
                filter,
            }, "deleteOne");
        };
        this.deleteMany = async ({ collection, filter, }) => {
            return this.makeRequest({
                dataSource: Atlas.dataSource,
                database: Atlas.database,
                collection: collection || Atlas.collection,
                filter,
            }, "deleteMany");
        };
        this.find = async ({ collection, filter, sort, limit, skip, }) => {
            return this.makeRequest({
                dataSource: Atlas.dataSource,
                database: Atlas.database,
                collection: collection || Atlas.collection,
                filter,
                sort,
                skip,
                limit,
            }, "find");
        };
        this.aggregate = async ({ collection, pipeline, }) => {
            return this.makeRequest({
                dataSource: Atlas.dataSource,
                database: Atlas.database,
                collection: collection || Atlas.collection,
                pipeline,
            }, "aggregate");
        };
        Atlas.dataSource = dataSource;
        Atlas.database = database;
        Atlas.apiKey = apiKey;
        Atlas.apiUrl = apiUrl;
        if (collection) {
            Atlas.collection = collection;
        }
    }
}
exports.Atlas = Atlas;
exports.default = Atlas;
