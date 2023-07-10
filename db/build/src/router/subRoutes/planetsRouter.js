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
const { Router: PlanetsRouter } = require("express");
let planetsRouter = PlanetsRouter();
let { planets } = require('../../database/index');
planetsRouter.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.status(200).json(yield planets.getAll()); }));
planetsRouter.get('/detail/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    res.status(200).json(yield planets.getById(id));
}));
module.exports = planetsRouter;