const express = require("express");

const Recipes = require("./recipe-model");

const router = express.Router();


router.get("/", (req, res) => {
    Recipes.getRecipes()
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.get("/shoppinglist/:id", (req, res) => {
    const id = req.params.id;
    Recipes.getShoppingList(id)
        .then(list => {
            res.status(200).json(list)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.get("/instructions/:id", (req, res) => {
    const id = req.params.id;
    Recipes.getInstructions(id)
        .then(steps => {
            res.status(200).json(steps)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})











module.exports = router;