export interface AtlasContructorProps {
  dataSource: string;
  database: string;
  apiKey: string;
  apiUrl: string;
  collection?: string;
}

export interface AtlasInsertResponse {
  insertedId?: string;
  insertedIds?: Array<string>;
}

export interface AtlasUpdateResponse {
  matchedCount?: number;
  modifiedCount?: number;
  upsertedId?: string;
}

export interface AtlasDeleteResponse {
  deletedCount: number;
}

export interface AtlasReadResponse {
  documents?: Array<any>;
  document?: any;
}
