import InputSection from "../components/InputSection"
import EducationalInputs from "../components/EducationalInputs"
import PracticalInputs from "../components/PracticalInputs"
import GeneralInfoInputs from "../components/GeneralInfoInputs"
import SubmitBtn from "./SubmitBtn"
import PlusCircleIcon from "../assets/PlusCircleIcon"
import "../styles/Form.css"

function Form({handlePageChangeClick, handleIsValidForm, handleInputValues, inputValues,}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const inputs = [...document.querySelectorAll(".input-field")];  

    // use isValid to prevent changing page with submit in App.jsx
    let isValid = inputs.every(input => input.value.trim());
    
    if (isValid) {
      handleIsValidForm(true);
      
      // Change page if values are valid
      handlePageChangeClick();
    } else {
      alert("Please fill all the required inputs");
    }    
  }

  const handleAddEduSection = () => {
    const secIndex = Object.keys(inputValues.eduSections).length;
    handleInputValues((prevValues) => (
      {
      ...prevValues,
      ["eduSections"]: {
        ...prevValues["eduSections"], 
        [`sec${secIndex}`]: {
            titleStudy: "",
            schoolName: "",
            dateStudy: "",
        },
      }
    }));
  };

  const eduElements = (Object.values(inputValues.eduSections).map((section, valueIndex) => {    
    const newKey = Object.keys(inputValues.eduSections)[valueIndex];
    return (
      <EducationalInputs key={newKey} inputValues={inputValues} handleInputValues={handleInputValues} secIndex={valueIndex}/>
    )
  }));

  const handleAddPracSection = () => {
    const secIndex = Object.keys(inputValues.pracSections).length;
    handleInputValues((prevValues) => (
      {
      ...prevValues,
      ["pracSections"]: {
        ...prevValues["pracSections"], 
        [`sec${secIndex}`]: {
          companyName: "",
          position: "",
          responsabilities: "",
          fromDate: "",
          untilDate: "",
        },
      }
    }));
  };

  const pracElements = (Object.values(inputValues.pracSections).map((section, valueIndex) => {    
    const newKey = Object.keys(inputValues.pracSections)[valueIndex];
    return (
      <PracticalInputs key={newKey} inputValues={inputValues} handleInputValues={handleInputValues} secIndex={valueIndex}/>
    )
  }));

  return <>
    <form className="cv-form" onSubmit={handleSubmit}>

      <div className={`input-section general-section`}>
        <h2>General Information</h2>
          <GeneralInfoInputs key={"generalInputs"} inputValues={inputValues} handleInputValues={handleInputValues}/>
        <hr />
      </div>

      {eduElements.map(sec => {
        return <>
          <div className={`input-section edu-section`}>
            <h2>Educational Experience</h2>
              {sec}
            <hr />
          </div>
        </>  
      })}

      <button type="button" className="add-section-btn" onClick={handleAddEduSection}>
        <PlusCircleIcon key={"plusCircleIcon"}/>
        Add educational Experience
      </button>

      {pracElements.map(sec => {
        return <>
          <div className={`input-section edu-section`}>
            <h2>Practical Experience</h2>
              {sec}
            <hr />
          </div>
        </>  
      })}

      <button type="button" className="add-section-btn" onClick={handleAddPracSection}>
        <PlusCircleIcon key={"plusCircleIcon2"}/>
        Add Practical Experience
      </button>

      <SubmitBtn key={"submitForm"}/>
    </form>
  </>
}

export default Form;