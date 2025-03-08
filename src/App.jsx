// import { useState } from 'react'
import { useState } from 'react';
import './App.css'

import InputPage from './components/InputPage';

function App() {
  const togglePage = (page) => {    
    setCurrentPage(page);
  }

  const [currentPage, setCurrentPage] = useState("editPage");


  if (currentPage === "editPage") {
    return <InputPage handlePageChangeClick={() => togglePage("showPage")}/>
  } else if (currentPage === "showPage") {
    return <h1>Complete cv</h1>
  }
}

export default App
  