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
    Ratings: {
        Source: string;
        Value: string;
    }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
}
export interface OmdbSearchResult {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}
export declare class OmdbApiClient {
    private _apiKey;
    private _baseUrl;
    constructor(_apiKey: string);
    get(title: string, options?: OmdbGetOptions): Promise<OmdbGetResult>;
    search(title: string, options?: OmdbSearchOptions): Promise<OmdbSearchResult>;
    private _request;
}
