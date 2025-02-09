export default function BookList() {
   let pageTitle = "New Book Releases";
   let book1 = "https://m.media-amazon.com/images/I/61CIKpN5QjL._SL1200_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/61SKd+S0S-L._SL1400_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/710FF4JrjsL._SL1500_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Book 1" />
         <img src={book2} alt="Book 2" />
         <img src={book3} alt="Book 3" />
      </div>      
   );
}