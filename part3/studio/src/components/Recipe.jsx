import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.feastmagazine.com/restaurants/9-st-louis-chefs-to-know-in-2017/collection_c2940832-c877-11e6-bf1c-ef7c9ac96a0d.html";
   let authorPhoto = "https://bloximages.newyork1.vip.townnews.com/feastmagazine.com/content/tncms/assets/v3/editorial/7/6c/76cc4ef0-c877-11e6-ba97-df6bcbc55545/585c20621d4af.image.jpg";
   let authorName = "Ari Jo Ellis";

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
   const photoUrl = "https://bing.com/th?id=OSK.c8741fc3c4a4ca1f95a86b748a7843ce"
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
