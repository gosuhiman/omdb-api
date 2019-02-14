import * as request from "request";

export enum OmdbResultType {
  MOVIE = 'movie',
  SERIES = 'series',
  EPISODE = 'episode',
}

export enum OmdbResultDataType {
  JSON = 'json',
  XML = 'xml',
}

export class OmdbApiClient {
  private _baseUrl: string = 'http://www.omdbapi.com/';

  constructor(private _apiKey: string) {

  }

  get(title: string, type?: OmdbResultType, dataType?: OmdbResultDataType): Promise<any> {
    const query: any = {t: title};
    if (type) query.type = type;
    if (dataType) query.r = type;
    return this._request(query);
  }

  search(title: string, type?: OmdbResultType, page?: number, dataType?: OmdbResultDataType): Promise<any> {
    const query: any = {s: title};
    if (type) query.type = type;
    if (dataType) query.r = type;
    if (page) query.page = page;
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
        return resolve(body);
      });
    });
  }
}
