"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItdashboardWebApiClient = void 0;
const AxiosClient_1 = require("../http/AxiosClient");
const BASEURL = "https://itdashboard.cio.go.jp/PublicApi/getData.json";
class ItdashboardWebApiClient {
    constructor(httpClient = new AxiosClient_1.AxiosHttpClient(), baseUrl = BASEURL) {
        this.baseUrl = baseUrl;
        this.httpClient = httpClient;
    }
    get(dataset, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsString = this.buildQueryString(dataset, options);
            const path = this.baseUrl + "?" + queryParamsString;
            const data = yield this.httpClient.get(path);
            return data;
        });
    }
    buildQueryString(dataset, options) {
        var _a;
        const queryObject = {
            dataset: dataset,
        };
        if (options === null || options === void 0 ? void 0 : options.fieldsToGet) {
            const fieldsToGet = (_a = options.fieldsToGet) === null || _a === void 0 ? void 0 : _a.join(",");
            Object.assign(queryObject, {
                field: fieldsToGet,
            });
        }
        if (options === null || options === void 0 ? void 0 : options.filterByFields) {
            Object.assign(queryObject, Object.assign({}, options.filterByFields));
        }
        const obj = new URLSearchParams(queryObject);
        return obj.toString();
    }
}
exports.ItdashboardWebApiClient = ItdashboardWebApiClient;
//# sourceMappingURL=ItdashboardWebApiClient.js.map