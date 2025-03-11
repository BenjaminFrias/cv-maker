import { useState } from 'react';
import './App.css'
import ShowPage from './components/ShowPage';
import InputPage from './components/InputPage';
import InputSection from "./components/InputSection"
import EducationalInputs from "./components/EducationalInputs"
import PracticalInputs from "./components/PracticalInputs"

function App() {
  // todo: pass input values to input page to: 1. create the sections 2. paste existing values in inputs
  const togglePage = (page) => {
    if (isFormValid) {
      setCurrentPage(page);
    }  
  }
  
  const [inputValues, setinputValues] = useState([]);
  
  const handleInputValues = (inputValues) => {
    setinputValues(inputValues);    
  }  
  
  const [isFormValid, setIsFormValid] = useState(false);
  const [currentPage, setCurrentPage] = useState("editPage");
  
  const handleIsValidForm = (isValid) => {
    setIsFormValid(isValid)
  }

  // Sections input elements states
  const [eduSections, setEduSections] = useState([<InputSection title={"Educational information"} type="edu-section" key={`edu-${Date.now()}-0`}>
    <EducationalInputs/>
  </InputSection>,]);

  const handleAddEduSection = () => {
  const newKey = `edu-${Date.now()}-${eduSections.length}`;
  setEduSections([...eduSections, <InputSection title={"Educational information"} type="edu-section" key={newKey}>
      <EducationalInputs />
    </InputSection>,]);
  };
  
  // Practical sections states
  const [pracSections, setPracSections] = useState([<InputSection title={"Practical information"} type="prac-section" key={`prac-${Date.now()}-0`}>
    <PracticalInputs/>
  </InputSection>,]);

  const handleAddPracSection = () => {
    const newKey = `prac-${Date.now()}-${pracSections.length}`;
    setPracSections([...pracSections, <InputSection title={"Practical information"} type="prac-section" key={newKey}>
      <PracticalInputs/>
    </InputSection>,]);
  };

  const sectionHandlers = {
    handleAddEduSection: handleAddEduSection,
    eduSections: eduSections,
    handleAddPracSection: handleAddPracSection,
    pracSections: pracSections,
  }

  if (currentPage === "editPage") {
    return <InputPage 
      handlePageChangeClick={() => togglePage("showPage")} handleIsValidForm={handleIsValidForm}
      handleInputValues={handleInputValues} sectionHandlers={sectionHandlers}
    />
  } else if (currentPage === "showPage") {
    return <ShowPage handlePageChangeClick={() => togglePage("editPage")} inputValues={inputValues}/>
  }
}

export default App
  