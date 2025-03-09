import { useState } from 'react';
import './App.css'
import ShowPage from './components/ShowPage';
import InputPage from './components/InputPage';

function App() {
  const togglePage = (page) => {    
    if (isFormValid) {
      setCurrentPage(page);
    }  
  }

  const handleIsValidForm = () => {
    setIsFormValid(true)
  }

  const [isFormValid, setIsFormValid] = useState(false);
  const [currentPage, setCurrentPage] = useState("editPage");

  if (currentPage === "editPage") {
    return <InputPage handlePageChangeClick={() => togglePage("showPage")} handleIsValidForm={() => handleIsValidForm(true)}/>
  } else if (currentPage === "showPage") {
    return <ShowPage handlePageChangeClick={() => togglePage("editPage")}/>
  }
}

export default App
  