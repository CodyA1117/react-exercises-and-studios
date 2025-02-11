import recipe from './recipe.json';

export default function AuthorInfo() {
    // Access the first object in the recipe array
    const author = recipe[0].author;
    const authorImage = recipe[0].authorImage;
    const website = recipe[0].website;

    // Render the author info
    return (
        <div>
            <img src={authorImage} alt={author} className="authorImage" />
            <h3>{author}</h3>
            <a href={website}>{website}</a>
        </div>
    );
}


 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 