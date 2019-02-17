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
export interface OmdbRating {
    Source: string;
    Value: string;
}
export interface OmdbGetResult {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: OmdbRating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}
export interface OmdbSearchResultItem {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}
export interface OmdbSearchResult {
    Search: OmdbSearchResultItem[];
    totalResults: string;
    Response: string;
}
export declare class OmdbApiClient {
    private _apiKey;
    private _baseUrl;
    constructor(_apiKey: string);
    getByTitle(title: string, options?: OmdbGetOptions): Promise<OmdbGetResult>;
    getByImdbId(imdbId: string, options?: OmdbGetOptions): Promise<OmdbGetResult>;
    search(title: string, options?: OmdbSearchOptions): Promise<OmdbSearchResult>;
    private _get;
    private _request;
}
