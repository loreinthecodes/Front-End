const API_KEY = "4e5d20989ffb4a4fbd737784af5db599"
const recipelistEl = document.getElementById("recipe-list")



function displayRecipe(recipes){
    recipelistEl.innerHTML = "";
    recipes.forEach(recipe => {
        const recipeitemEl = document.createElement("li");
        recipeitemEl.classList.add("recipe-item");

////////////////////////////////////////////////////////////
        let recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";
        
        recipeitemEl.appendChild(recipeImageEl);
////////////////////////////////////////////////////////////
        let recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        recipeitemEl.appendChild(recipeTitleEl);
///////////////////////////////////////////////////////////
        let ingredientsEl = document.createElement("p");
        ingredientsEl.innerHTML = `<strong>Ingredients:</strong>
                        ${recipe.extendedIngredients.map((ingredient)=> ingredient.original).join(", ")}`

        recipeitemEl.appendChild(ingredientsEl);
//////////////////////////////////////////////////////////
        let anchorEl = document.createElement("a");
        anchorEl.innerText = "View Recipe"
        anchorEl.href = recipe.sourceUrl;
        recipeitemEl.appendChild(anchorEl);
/////////////////////////////////////////////////////////
        recipelistEl.appendChild(recipeitemEl);
    });
}
async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    const data = await response.json()
    return data.recipes;
}

async function init(){
    const recipes = await getRecipes() 
    displayRecipe(recipes)
}


init();
// const API_KEY = "4e5d20989ffb4a4fbd737784af5db599";
// const recipeListEl = document.getElementById("recipe-list");

// function displayRecipes(recipes) {
//   recipeListEl.innerHTML = "";
//   recipes.forEach((recipe) => {
//     const recipeItemEl = document.createElement("li");
//     recipeItemEl.classList.add("recipe-item");
//     recipeImageEl = document.createElement("img");
//     recipeImageEl.src = recipe.image;
//     recipeImageEl.alt = "recipe image";

//     recipeTitleEl = document.createElement("h2");
//     recipeTitleEl.innerText = recipe.title;

//     recipeIngredientsEl = document.createElement("p");
//     recipeIngredientsEl.innerHTML = `
//         <strong>Ingredients:</strong> ${recipe.extendedIngredients
//           .map((ingredient) => ingredient.original)
//           .join(", ")}
//     `;

//     recipeLinkEl = document.createElement("a");
//     recipeLinkEl.href = recipe.sourceUrl;
//     recipeLinkEl.innerText = "View Recipe";

//     recipeItemEl.appendChild(recipeImageEl);
//     recipeItemEl.appendChild(recipeTitleEl);
//     recipeItemEl.appendChild(recipeIngredientsEl);
//     recipeItemEl.appendChild(recipeLinkEl);
//     recipeListEl.appendChild(recipeItemEl);
//   });
// }

// async function getRecipes() {
//   const response = await fetch(
//     `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
//   );

//   const data = await response.json();

//   return data.recipes;
// }

// async function init() {
//   const recipes = await getRecipes();
//   displayRecipes(recipes);
// }

// init();