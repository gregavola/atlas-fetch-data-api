import { AtlasContructorProps, AtlasReadResponse, AtlasInsertResponse, AtlasUpdateResponse, AtlasDeleteResponse } from "../lib/types";
export declare class Atlas {
    static dataSource: string;
    static database: string;
    static apiKey: string;
    static apiUrl: string;
    static collection: string;
    constructor({ dataSource, database, apiKey, apiUrl, collection, }: AtlasContructorProps);
    setCollection: (collection: string) => void;
    private makeRequest;
    findOne: ({ collection, filter, }: {
        collection?: string;
        filter: Object;
    }) => Promise<AtlasReadResponse>;
    insertOne: ({ collection, document, }: {
        collection?: string;
        document: Object;
    }) => Promise<AtlasInsertResponse>;
    insertMany: ({ collection, documents, }: {
        collection?: string;
        documents: Array<any>;
    }) => Promise<AtlasInsertResponse>;
    updateOne: ({ collection, filter, update, upsert, }: {
        collection?: string;
        filter?: any;
        update: any;
        upsert?: boolean;
    }) => Promise<AtlasUpdateResponse>;
    updateMany: ({ collection, filter, update, upsert, }: {
        collection?: string;
        filter?: any;
        update: any;
        upsert?: boolean;
    }) => Promise<AtlasUpdateResponse>;
    replaceOne: ({ collection, filter, replace, upsert, }: {
        collection?: string;
        filter?: any;
        replace: any;
        upsert: boolean;
    }) => Promise<AtlasUpdateResponse>;
    deleteOne: ({ collection, filter, }: {
        collection?: string;
        filter: any;
    }) => Promise<AtlasDeleteResponse>;
    deleteMany: ({ collection, filter, }: {
        collection?: string;
        filter: any;
    }) => Promise<AtlasDeleteResponse>;
    find: ({ collection, filter, sort, limit, skip, }: {
        collection?: string;
        filter?: Object;
        sort?: Object;
        limit?: number;
        skip?: number;
    }) => Promise<AtlasReadResponse>;
    aggregate: ({ collection, pipeline, }: {
        collection?: string;
        pipeline: Array<any>;
    }) => Promise<AtlasReadResponse>;
}
export default Atlas;
