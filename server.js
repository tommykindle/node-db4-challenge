const express = require('express');
const helmet = require('helmet');

const RecipeRouter = require("./routes/recipes-router")

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/recipes', RecipeRouter)

module.exports = server