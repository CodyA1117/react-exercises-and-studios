import recipe from './recipe.json';

export default function IngredientList() {
    return (
        <div>
            <h3>Ingredients</h3>
            <ul>
                {recipe[0].ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}

//import json file for the data
//use a nested map to get inside the inner array
 