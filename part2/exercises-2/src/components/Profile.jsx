import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

// Map through the oceans JSON and create a list of profile components
const listItem = oceans.map(ocean => (
   <div key={ocean.id} className={`${ocean.fishCheck ? "isAFish" : "profile"}`}>
      <h1>{ocean.name}</h1>
      <h3>Fun Facts:</h3>
      <ul>
         <li>{ocean.fact1}</li>
         <li>{ocean.fact2}</li>
         <li>{ocean.fact3}</li>
      </ul>
      <img src={ocean.image} alt={ocean.name} className="img" />
      {/* Button component inside the profile */}
      <Button />
   </div>
));

function Profile() {
   return (
      <div>
         {listItem}
      </div>
   );
}

export default Profile;
