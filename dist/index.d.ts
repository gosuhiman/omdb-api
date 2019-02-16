export declare enum OmdbResultType {
    MOVIE = "movie",
    SERIES = "series",
    EPISODE = "episode"
}
export declare enum OmdbResultDataType {
    JSON = "json",
    XML = "xml"
}
export interface OmdbGetOptions {
    type?: OmdbResultType;
    dataType?: OmdbResultDataType;
}
export interface OmdbSearchOptions {
    page?: number;
    type?: OmdbResultType;
    dataType?: OmdbResultDataType;
}
export declare class OmdbApiClient {
    private _apiKey;
    private _baseUrl;
    constructor(_apiKey: string);
    get(title: string, options?: OmdbGetOptions): Promise<any>;
    search(title: string, options?: OmdbSearchOptions): Promise<any>;
    private _request;
}
