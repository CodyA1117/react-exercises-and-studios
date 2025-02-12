import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label: "Dinner Recipes", value: "dinner"},
      {label: "Italian Cuisine", value: "italian"},
      {label: "Quick Meals", value: "quick-meals"}
   ];

   const [boardName, setBoardName] = useState('no boards yet!');
   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
