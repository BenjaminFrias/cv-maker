import InputSection from "./InputSection"
import GeneralInfoInputs from "./GeneralInfoInputs"
import EducationalInputs from "./EducationalInputs"
import PracticalInputs from "./PracticalInputs"
import SubmitBtn from "./SubmitBtn"
import "../styles/Form.css"
import { useState } from "react"


function Form({handlePageChangeClick}) {

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
  
  // Educational sections states
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
  }

  return <form className="cv-form" onSubmit={handleSubmit}>
    <InputSection title={"General information"}>
      <GeneralInfoInputs/>
    </InputSection>

    {eduSections.map(sec => sec)}
    <button type="button" onClick={handleAddEduSection}>
      Add educational Experience
    </button>
    
    {pracSections.map(sec => sec)}
    <button type="button" onClick={handleAddPracSection}>
      Add Practical Experience
    </button>

    <SubmitBtn submitHandler={handlePageChangeClick}/>
  </form>
  }

  export default Form;