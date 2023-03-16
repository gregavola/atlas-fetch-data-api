import fetch from "node-fetch";

import {
  AtlasContructorProps,
  AtlasReadResponse,
  AtlasInsertResponse,
  AtlasUpdateResponse,
  AtlasDeleteResponse,
} from "../lib/types";

export class Atlas {
  static dataSource: string;
  static database: string;
  static apiKey: string;
  static apiUrl: string;
  static collection: string;

  constructor({
    dataSource,
    database,
    apiKey,
    apiUrl,
    collection,
  }: AtlasContructorProps) {
    Atlas.dataSource = dataSource;
    Atlas.database = database;
    Atlas.apiKey = apiKey;
    Atlas.apiUrl = apiUrl;

    if (collection) {
      Atlas.collection = collection;
    }
  }

  public setCollection = (collection: string) => {
    Atlas.collection = collection;
  };

  private makeRequest = async (payload: any, action: string): Promise<any> => {
    const url = `${Atlas.apiUrl}/action/${action}`;
    const response = await fetch(url, {
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
    } else {
      return await response.json();
    }
  };

  public findOne = async ({
    collection,
    filter,
  }: {
    collection?: string;
    filter: Object;
  }): Promise<AtlasReadResponse> => {
    return this.makeRequest(
      {
        dataSource: Atlas.dataSource,
        database: Atlas.database,
        collection: collection || Atlas.collection,
        filter,
      },
      "findOne"
    );
  };

  public insertOne = async ({
    collection,
    document,
  }: {
    collection?: string;
    document: Object;
  }): Promise<AtlasInsertResponse> => {
    return this.makeRequest(
      {
        dataSource: Atlas.dataSource,
        database: Atlas.database,
        collection: collection || Atlas.collection,
        document,
      },
      "insertOne"
    );
  };

  public insertMany = async ({
    collection,
    documents,
  }: {
    collection?: string;
    documents: Array<any>;
  }): Promise<AtlasInsertResponse> => {
    return this.makeRequest(
      {
        dataSource: Atlas.dataSource,
        database: Atlas.database,
        collection: collection || Atlas.collection,
        documents,
      },
      "insertMany"
    );
  };

  public updateOne = async ({
    collection,
    filter,
    update,
    upsert,
  }: {
    collection?: string;
    filter?: any;
    update: any;
    upsert?: boolean;
  }): Promise<AtlasUpdateResponse> => {
    return this.makeRequest(
      {
        dataSource: Atlas.dataSource,
        database: Atlas.database,
        collection: collection || Atlas.collection,
        filter,
        update,
        upsert,
      },
      "updateOne"
    );
  };

  public updateMany = async ({
    collection,
    filter,
    update,
    upsert,
  }: {
    collection?: string;
    filter?: any;
    update: any;
    upsert?: boolean;
  }): Promise<AtlasUpdateResponse> => {
    return this.makeRequest(
      {
        dataSource: Atlas.dataSource,
        database: Atlas.database,
        collection: collection || Atlas.collection,
        filter,
        update,
        upsert,
      },
      "updateMany"
    );
  };

  public replaceOne = async ({
    collection,
    filter,
    replace,
    upsert,
  }: {
    collection?: string;
    filter?: any;
    replace: any;
    upsert: boolean;
  }): Promise<AtlasUpdateResponse> => {
    return this.makeRequest(
      {
        dataSource: Atlas.dataSource,
        database: Atlas.database,
        collection: collection || Atlas.collection,
        filter,
        replace,
        upsert,
      },
      "updateOne"
    );
  };

  public deleteOne = async ({
    collection,
    filter,
  }: {
    collection?: string;
    filter: any;
  }): Promise<AtlasDeleteResponse> => {
    return this.makeRequest(
      {
        dataSource: Atlas.dataSource,
        database: Atlas.database,
        collection: collection || Atlas.collection,
        filter,
      },
      "deleteOne"
    );
  };

  public deleteMany = async ({
    collection,
    filter,
  }: {
    collection?: string;
    filter: any;
  }): Promise<AtlasDeleteResponse> => {
    return this.makeRequest(
      {
        dataSource: Atlas.dataSource,
        database: Atlas.database,
        collection: collection || Atlas.collection,
        filter,
      },
      "deleteMany"
    );
  };

  public find = async ({
    collection,
    filter,
    sort,
    limit,
    skip,
  }: {
    collection?: string;
    filter?: Object;
    sort?: Object;
    limit?: number;
    skip?: number;
  }): Promise<AtlasReadResponse> => {
    return this.makeRequest(
      {
        dataSource: Atlas.dataSource,
        database: Atlas.database,
        collection: collection || Atlas.collection,
        filter,
        sort,
        skip,
        limit,
      },
      "find"
    );
  };

  public aggregate = async ({
    collection,
    pipeline,
  }: {
    collection?: string;
    pipeline: Array<any>;
  }): Promise<AtlasReadResponse> => {
    return this.makeRequest(
      {
        dataSource: Atlas.dataSource,
        database: Atlas.database,
        collection: collection || Atlas.collection,
        pipeline,
      },
      "aggregate"
    );
  };
}

export default Atlas;
