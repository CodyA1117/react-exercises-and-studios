import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://chefjohnrecipes.com";
   let authorPhoto = "https://example.com/chef.jpg";
   let authorName = "Chef John";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Spaghetti",
      "Eggs",
      "Parmesan cheese",
      "Pancetta",
      "Black pepper"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   const title = "Spaghetti Carbonara";
   const description = "A classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper. "
   return (
      <div> 
         <div>
            <h1>{title}</h1>
            <p>{description}</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   const photoUrl = "https://example.com/spaghetti.jpg"
   return (
      <img src={photoUrl} alt="Spaghetti Carbonara" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
