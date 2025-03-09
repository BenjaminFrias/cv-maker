import InputField from "./InputField";

function GeneralInfoInputs() {
	return (
		<div>
			<InputField placeholder={"Full name:"} type={"text"} inputName={"fullName"}/>
			<InputField placeholder={"Email:"} type={"email"} inputName={"email"}/>
			<InputField placeholder={"Phone:"} type={"text"} inputName={"phone"}/>
		</div>
	)
}

export default GeneralInfoInputs;