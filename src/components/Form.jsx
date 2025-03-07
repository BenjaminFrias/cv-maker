import InputSection from "./InputSection"
import GeneralInfoInputs from "./GeneralInfoInputs"
import EducationalInputs from "./EducationalInputs"
import PracticalInputs from "./PracticalInputs"
import SubmitBtn from "./SubmitBtn"
import "../styles/Form.css"

function Form() {
    return <form className="cv-form">
            <InputSection title={"General information"}>
              <GeneralInfoInputs/>
            </InputSection>
            <InputSection title={"Educational experience"}>
              <EducationalInputs/>
            </InputSection>
        
            <InputSection title={"Practical experience"}>
              <PracticalInputs/>
            </InputSection>
            <SubmitBtn/>
        </form>
  }

  export default Form;