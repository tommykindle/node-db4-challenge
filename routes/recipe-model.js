const db = require("../data/dbConfig");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes() {
    return db("recipes")
}

function getShoppingList(id) {
    return db("recipe_ingredient as ri")
        .join("recipes as r ", "r.id", "ri.recipe_id")
        .join("ingredients as i", "i.id", "ri.ingredient_id")
        .select("ri.id", "r.name", "i.name", "ri.unit", "ri.quanity")
        .where("ri.recipe_id", id)
}

function getInstructions(id) {
    return db("steps as s ")
        .join("recipes as r", "r.id", "s.recipe_id")
        .select("s.id", "r.name", "s.step_number", "s.instructions")
        .where("s.recipe_id", id)
        .orderBy("step_number", "asc")
}