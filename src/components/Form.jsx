import InputSection from "./InputSection"
import GeneralInfoInputs from "./GeneralInfoInputs"
import EducationalInputs from "./EducationalInputs"
import PracticalInputs from "./PracticalInputs"
import SubmitBtn from "./SubmitBtn"
import PlusCircleIcon from "../assets/PlusCircleIcon"
import "../styles/Form.css"
import { useState } from "react"


function Form({handlePageChangeClick, handleIsValidForm, handleInputValues}) {

  // Educational sections states
  const [eduSections, setEduSections] = useState([<InputSection title={"Educational information"} key={`edu-${Date.now()}-0`}>
    <EducationalInputs/>
  </InputSection>,]);

const handleAddEduSection = () => {
  const newKey = `edu-${Date.now()}-${eduSections.length}`;
  setEduSections([...eduSections, <InputSection title={"Educational information"} key={newKey}>
      <EducationalInputs/>
    </InputSection>,]);
};
  
  // Practical sections states
  const [pracSections, setPracSections] = useState([<InputSection title={"Practical information"} key={`prac-${Date.now()}-0`}>
    <PracticalInputs/>
  </InputSection>,]);

  const handleAddPracSection = () => {
    const newKey = `prac-${Date.now()}-${pracSections.length}`;
    setPracSections([...pracSections, <InputSection title={"Practical information"} key={newKey}>
      <PracticalInputs/>
    </InputSection>,]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = [...document.querySelectorAll(".input-field")];
    
    let isValid = inputs.every(input => input.value.trim());
    
    if (isValid) {
      // object with input name as key / value of the input as value
      const inputsObj = {};
      
      // Add every input to input objects
      inputs.forEach(input => {
        inputsObj[input.dataset.name] = input.value.trim();
      });

      handleInputValues(inputsObj)
    
      handleIsValidForm(true);
      
      // Change page if values are valid
      handlePageChangeClick();
    } else {
      alert("Please fill all the required inputs");
    }
    
  }

  return <form className="cv-form" onSubmit={handleSubmit}>
    <InputSection title={"General information"}>
      <GeneralInfoInputs/>
    </InputSection>

    {eduSections.map(sec => sec)}
    <button type="button" className="add-section-btn" onClick={handleAddEduSection}>
      <PlusCircleIcon/>
      Add educational Experience
    </button>
    
    {pracSections.map(sec => sec)}
    <button type="button" className="add-section-btn" onClick={handleAddPracSection}>
      <PlusCircleIcon/>
      Add Practical Experience
    </button>

    <SubmitBtn/>
  </form>
}

export default Form;