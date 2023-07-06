"use strict";
const { Schema: FilmSchema } = require('mongoose');
const FilmsSchema = new FilmSchema({
    _id: { type: String },
    title: { type: String },
    opening_crawl: { type: String },
    director: { type: String },
    producer: { type: String },
    release_date: { type: Date },
    characters: [{ type: String, ref: 'characters' }],
    planets: [{ type: String, ref: 'planets' }]
});
module.exports = FilmsSchema;
