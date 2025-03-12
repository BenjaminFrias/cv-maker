import InputField from "./InputField";

function EducationalInputs({defaultValues = null}) {
	return (
			<div>
				<InputField placeholder={"School name:"} type={"text"} inputName={"schoolName"}/>
				<InputField placeholder={"Title of study:"} type={"text"} inputName={"titleStudy"}/>
				<InputField placeholder={"Date of study:"} type={"date"} inputName={"dateStudy"}/>
			</div>
	)
}

export default EducationalInputs;