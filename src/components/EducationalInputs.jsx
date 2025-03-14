import InputField from "./InputField";

function EducationalInputs({inputValues, handleInputValues, secIndex}) {
	
	return (
		<div>
			<InputField section={"eduSections"} inputValues={inputValues} secIndex={secIndex} setInputValue={handleInputValues} placeholder={"Title of study:"} type={"text"} inputName={"titleStudy"}/>
			<InputField section={"eduSections"} inputValues={inputValues} secIndex={secIndex} setInputValue={handleInputValues} placeholder={"School name:"} type={"text"} inputName={"schoolName"}/>
			<InputField section={"eduSections"} inputValues={inputValues} secIndex={secIndex} setInputValue={handleInputValues} placeholder={"Date of study:"} type={"date"} inputName={"dateStudy"}/>
		</div>
	)
}

export default EducationalInputs;