import recipe from './recipe.json';
export default function RecipeImage() {
    return (
        <div>
            <img
                src={recipe.image}
                alt={recipe.name}
                className="recipeImage"
            />
        </div>
    );
}

 
 //import json file for the data
 //apply css for className recipeImage
 