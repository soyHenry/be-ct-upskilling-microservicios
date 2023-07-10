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
const DbRouter = Router();
const { validateModel } = require('../middlewares/index');
const store = require('../database/index');
DbRouter.get('/:model', validateModel, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { model } = req.params;
    res.status(200).json(yield store[model].getAll());
}));
DbRouter.get('/:model/:id', validateModel, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { model, id } = req.params;
    res.status(200).json(yield store[model].getById(id));
}));
/* DbRouter.use('/characters', require('./subRoutes/charactersRouter'))

DbRouter.use('/films', require('./subRoutes/filmsRouter'))

DbRouter.use('/planets', require('./subRoutes/planetsRouter')) */
module.exports = DbRouter;
