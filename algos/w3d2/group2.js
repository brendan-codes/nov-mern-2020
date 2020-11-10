/*
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.

  Input:
    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)
  Output:
    int (max servings)

  Side note (possible extra challenge version): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the available ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

// Example Input
const recipe = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    "spicy": 5,
    "gourmet memes": 4200
};

const available = {
    "organic fat": 990,
    "live squid": 1,
    "birds nest": 10,
    "fried flesh": 10,
    "spicy": 50,
    "gourmet memes": 42000,
    "sugar": 9001,
    "spice": 5,
    "everything nice": 1,
};

// Output: 1 because only 1 live squid is available
// Output: 10 IF we had 10 live squids because then we have 10x of every ingredient
// Output: 0 IF we had 0 live squids or live squids key didn't exist in 'available'

const recipe = {
  "organic fat": 99,
  "live squid": 1,
  "birds nest": 1,
  "fried flesh": 1,
  "spicy": 5,
  "gourmet memes": 4200
};

const available = {
  "organic fat": 990,
  "live squid": 1,
  "birds nest": 10,
  "fried flesh": 10,
  "spicy": 50,
  "gourmet memes": 42000,
  "sugar": 9001,
  "spice": 5,
  "everything nice": 1,
};

// Output: 1 because only 1 live squid is available
// Output: 10 IF we had 10 live squids because then we have 10x of every ingredient
// Output: 0 IF we had 0 live squids or live squids key didn't exist in 'available'

function getMaxServings(recipe, ingredients) {
  //  Each ingredient needed in recipe is available
  let recipeKey = Object.keys(recipe);
  // console.log(recipeKey)
  // console.log(Object.keys(ingredients))
  let ingredientsKey = {};
  let ingredientCount = {}
  for (key of recipeKey) {
      if(ingredients.hasOwnProperty(key)) {
          ingredientsKey[key] = ingredients[key]
          ingredientCount[key] = 0
      } else {
          return 0;
      }
  }
  // console.log(ingredientsKey);
  // console.log(ingredientCount);

  for(key of recipeKey) {
      while(ingredientsKey[key] >= recipe[key]) {
          ingredientsKey[key] -= recipe[key];
          ingredientCount[key] += 1;
      }
  }
  console.log(ingredientCount);
  let servings = Object.values(ingredientCount);
  let maxServings = servings[0];
  console.log(maxServings);
  for(let i = 1; i < servings.length; i++) {
      if(servings[i] < maxServings) {
          maxServings = servings[i];
      }
  }
  //  Round down (recipe / available)
  //  output = lowest answer
  return maxServings;
}
console.log(getMaxServings(recipe, available))