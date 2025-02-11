import recipe from './recipe.json';
export default function AuthorInfo() {
    return (
        <div>
            <img
                src={recipe.author.image}
                alt={recipe.author.name}
                className="authorImage"
            />
            <h3>{recipe.author.name}</h3>
            <a href={recipe.website}>{recipe.website}</a>
        </div>
    );
}

 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 