"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require('request');
var OmdbResultType;
(function (OmdbResultType) {
    OmdbResultType["MOVIE"] = "movie";
    OmdbResultType["SERIES"] = "series";
    OmdbResultType["EPISODE"] = "episode";
})(OmdbResultType = exports.OmdbResultType || (exports.OmdbResultType = {}));
var OmdbResultDataType;
(function (OmdbResultDataType) {
    OmdbResultDataType["JSON"] = "json";
    OmdbResultDataType["XML"] = "xml";
})(OmdbResultDataType = exports.OmdbResultDataType || (exports.OmdbResultDataType = {}));
class OmdbApiClient {
    constructor(_apiKey) {
        this._apiKey = _apiKey;
        this._baseUrl = 'http://www.omdbapi.com/';
    }
    getByTitle(title, options) {
        const query = { t: title };
        return this._get(query, options);
    }
    getByImdbId(imdbId, options) {
        const query = { i: imdbId };
        return this._get(query, options);
    }
    search(title, options) {
        options = options ? options : {};
        const query = { s: title };
        if (options.page)
            query.page = options.page;
        if (options.type)
            query.type = options.type;
        if (options.dataType)
            query.r = options.dataType;
        return this._request(query);
    }
    _get(query, options) {
        options = options ? options : {};
        if (options.type)
            query.type = options.type;
        if (options.dataType)
            query.r = options.dataType;
        return this._request(query);
    }
    _request(query) {
        const options = {
            method: 'GET',
            url: this._baseUrl,
            qs: Object.assign({ apiKey: this._apiKey }, query)
        };
        return new Promise((resolve, reject) => {
            return request(options, (error, response, body) => {
                if (error)
                    return reject(error);
                try {
                    const obj = JSON.parse(body);
                    return resolve(obj);
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
}
exports.OmdbApiClient = OmdbApiClient;
