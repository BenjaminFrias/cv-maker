// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import ShowPage from './components/ShowPage';
import InputPage from './components/InputPage';

function App() {
  const togglePage = (page) => {    
    setCurrentPage(page);
  }

  const [currentPage, setCurrentPage] = useState("editPage");


  if (currentPage === "editPage") {
    return <InputPage handlePageChangeClick={() => togglePage("showPage")}/>
  } else if (currentPage === "showPage") {
    return <ShowPage/>
  }
}

export default App
  