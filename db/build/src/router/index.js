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
const { Router } = require("express");
/* const DbControllers = require("../controller"); */
const dataDb = require('../database/index');
const DbRouter = Router();
DbRouter.get('/characters', (_req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.status(200).json(yield dataDb.characters.getAll()); }));
DbRouter.get('/planets', (_req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.status(200).json(yield dataDb.planets.getAll()); }));
DbRouter.get('/films', (_req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.status(200).json(yield dataDb.films.getAll()); }));
module.exports = DbRouter;
