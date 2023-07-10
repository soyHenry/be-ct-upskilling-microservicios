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
const { cachedAsync } = require('../utils');
const Films = require('../data/index');
let { response } = require('../utils');
module.exports = {
    getAllFilms: cachedAsync((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let data = yield Films.list();
        response(res, 200, data.data);
    })),
    getDetailFilm: cachedAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let { id } = req.params;
        let data = yield Films.detail(id);
        response(res, 200, data.data);
    })),
};
