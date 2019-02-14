"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = __importStar(require("request"));
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
    get(title, type, dataType) {
        const query = { t: title };
        if (type)
            query.type = type;
        if (dataType)
            query.r = type;
        return this._request(query);
    }
    search(title, type, page, dataType) {
        const query = { s: title };
        if (type)
            query.type = type;
        if (dataType)
            query.r = type;
        if (page)
            query.page = page;
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
                return resolve(body);
            });
        });
    }
}
exports.OmdbApiClient = OmdbApiClient;
