import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
   const authorLink = "https://example-blog.com";
   const authorPhoto = "https://via.placeholder.com/150";
   const authorName = "Jane Doe";

   return (
      <div className={styles.recipeAuthorBlock}>
         <img
            src={authorPhoto}
            alt="Author photo"
            className={styles.imageUpdates}
         />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Author Blog</a>
         </div>
      </div>
   );
}

class RecipeDescription extends React.Component {
    render() {
       return (
          <div>
             <div>
                <h1>Chocolate Chip Cookies</h1>
                <p>Delicious homemade chocolate chip cookies, perfect for any occasion!</p>
             </div>
             <RecipeAuthor />
          </div>
       );
    }
 }
 
 export default RecipeDescription;
 
