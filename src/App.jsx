import { useState } from 'react';
import './App.css'
import ShowPage from './components/ShowPage';
import InputPage from './components/InputPage';

function App() {
  // todo: paste existing values in InputPage's inputs
  const togglePage = (page) => {
    if (isFormValid) {
      setCurrentPage(page);
    }  
  }
  
  const [inputValues, setinputValues] = useState({
    general: {},
    eduSections: {sec0: {}},
    pracSections: {sec0: {}},
  });

  const handleInputValues = (newValues) => {
    setinputValues(newValues); 
  }  

  console.log(inputValues);
  
  const [isFormValid, setIsFormValid] = useState(false);
  const [currentPage, setCurrentPage] = useState("editPage");
  
  const handleIsValidForm = (isValid) => {
    setIsFormValid(isValid)
  }

  if (currentPage === "editPage") {
    return <InputPage 
      handlePageChangeClick={() => togglePage("showPage")} handleIsValidForm={handleIsValidForm}
      handleInputValues={handleInputValues} inputValues={inputValues}
    />
  } else if (currentPage === "showPage") {
    return <ShowPage handlePageChangeClick={() => togglePage("editPage")} inputValues={inputValues}/>
  }
}

export default App
  