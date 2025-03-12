import InputSection from "./InputSection"
import GeneralInfoInputs from "./GeneralInfoInputs"
import SubmitBtn from "./SubmitBtn"
import PlusCircleIcon from "../assets/PlusCircleIcon"
import "../styles/Form.css"

function Form({handlePageChangeClick, handleIsValidForm, handleInputValues, inputValues, sectionHandlers}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    
    // Get general, educational, practical inputs and add them in the inputsValues obj
    const generalValues = [...document.querySelectorAll("div.input-section.general-section > div > .input-field")];
    const eduSectionsElems = [...document.querySelectorAll("div.input-section.edu-section > div")];
    const pracSectionsElems = [...document.querySelectorAll("div.input-section.prac-section > div")];
  
    const inputs = [...document.querySelectorAll(".input-field")];  

    // use isValid to prevent changing page with submit in App.jsx
    let isValid = inputs.every(input => input.value.trim());
    
    if (isValid) {
      generalValues.forEach(input => {
        inputValues["general"][input.dataset.name] = input.value.trim();
      })

      eduSectionsElems.forEach((section, index) => {
        const eduInputs = [...section.querySelectorAll(".input-field")];

        inputValues["eduSections"][index] = {};
        
        eduInputs.forEach(input => {
          inputValues["eduSections"][index][input.dataset.name] = input.value.trim();
        })
      })

      pracSectionsElems.forEach((section, index) => {
        const pracInputs = [...section.querySelectorAll(".input-field")];

        inputValues["pracSections"][index] = {};
        
        pracInputs.forEach(input => {
          inputValues["pracSections"][index][input.dataset.name] = input.value.trim();
        })
      })

      handleInputValues(inputValues);

      handleIsValidForm(true);
      
      // Change page if values are valid
      handlePageChangeClick();
    } else {
      alert("Please fill all the required inputs");
    }
    
  }
  
  return <form className="cv-form" onSubmit={handleSubmit}>
    <InputSection title={"General information"} type="general-section">
      <GeneralInfoInputs inputValues={inputValues} handleInputValues={handleInputValues}/>
    </InputSection>

    {sectionHandlers.eduSections.map(sec => sec)}
    <button type="button" className="add-section-btn" onClick={sectionHandlers.handleAddEduSection}>
      <PlusCircleIcon/>
      Add educational Experience
    </button>
    
    {sectionHandlers.pracSections.map(sec => sec)}
    <button type="button" className="add-section-btn" onClick={sectionHandlers.handleAddPracSection}>
      <PlusCircleIcon/>
      Add Practical Experience
    </button>

    <SubmitBtn/>
  </form>
}

export default Form;