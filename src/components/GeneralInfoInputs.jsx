import InputField from "./InputField";

function GeneralInfoInputs() {
	return (
		<div>
			<InputField placeholder={"First name:"} type={"text"}/>
			<InputField placeholder={"Last name:"} type={"text"}/>
			<InputField placeholder={"Email:"} type={"email"}/>
			<InputField placeholder={"Phone:"} type={"text"}/>
		</div>
	)
}

export default GeneralInfoInputs;