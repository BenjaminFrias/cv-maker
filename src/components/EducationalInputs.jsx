import "./InputField"

function EducationalInputs() {
	return (
			<div>
			<InputField placeholder={"School name:"} type={"text"}/>
			<InputField placeholder={"Title of study:"} type={"text"}/>
			<InputField placeholder={"Date of study:"} type={"date"}/>
			</div>
	)
}

export default EducationalInputs;