const request = require('request');

export enum OmdbResultType {
  MOVIE = 'movie',
  SERIES = 'series',
  EPISODE = 'episode',
}

export enum OmdbResultDataType {
  JSON = 'json',
  XML = 'xml',
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

export class OmdbApiClient {
  private _baseUrl: string = 'http://www.omdbapi.com/';

  constructor(private _apiKey: string) {
  }

  get(title: string, options?: OmdbGetOptions): Promise<any> {
    options = options ? options : {};
    const query: any = {t: title};
    if (options.type) query.type = options.type;
    if (options.dataType) query.r = options.dataType;
    return this._request(query);
  }

  search(title: string, options?: OmdbSearchOptions): Promise<any> {
    options = options ? options : {};
    const query: any = {s: title};
    if (options.page) query.page = options.page;
    if (options.type) query.type = options.type;
    if (options.dataType) query.r = options.dataType;
    return this._request(query);
  }

  private _request(query: any): Promise<any> {
    const options: any = {
      method: 'GET',
      url: this._baseUrl,
      qs: Object.assign({apiKey: this._apiKey}, query)
    };

    return new Promise<any>((resolve, reject) => {
      return request(options, (error: any, response: Response, body: any) => {
        if (error) return reject(error);
        return resolve(JSON.parse(body));
      });
    });
  }
}
