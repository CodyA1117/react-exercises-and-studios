import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";

function Button(props) {
  // Check the saveButton prop to decide which button to render
  return props.saveButton ? <SaveButton /> : <ClickedButton />;
}

export default Button;

 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 