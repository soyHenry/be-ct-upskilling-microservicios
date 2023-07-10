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
const mongoose = require('mongoose');
require('dotenv').config();
const conn = mongoose.createConnection(process.env.MONGO_URL);
const Characters = conn.model('characters', require('./schemas/charactersSchema'));
const Planets = conn.model('planets', require('./schemas/planetSchema'));
const Films = conn.model('films', require('./schemas/filmsSchemas'));
module.exports = {
    /* characters */
    characters: {
        getAll: () => __awaiter(void 0, void 0, void 0, function* () { return yield Characters.find().populate('homeworld', ['_id', 'name']).populate('films', ['_id', 'title']); }),
        getById: (id) => __awaiter(void 0, void 0, void 0, function* () { return yield Characters.findById(id).populate('homeworld').populate('films'); }),
    },
    /* planets */
    planets: {
        getAll: () => __awaiter(void 0, void 0, void 0, function* () { return yield Planets.find().populate('films', ['_id', 'title']); }),
        getById: (id) => __awaiter(void 0, void 0, void 0, function* () { return yield Planets.findById(id).populate('films'); })
    },
    /* films */
    films: {
        getAll: () => __awaiter(void 0, void 0, void 0, function* () { return yield Films.find().populate('characters', ['_id', 'name']).populate('planets', ['_id', 'name']); }),
        getById: (id) => __awaiter(void 0, void 0, void 0, function* () { return yield Films.findById(id).populate('characters').populate('planets'); }),
    }
};
