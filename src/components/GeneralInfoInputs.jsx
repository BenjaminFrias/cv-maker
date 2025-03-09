import InputField from "./InputField";

function GeneralInfoInputs() {
	return (
		<div>
			<InputField placeholder={"Full name:"} type={"text"}/>
			<InputField placeholder={"Email:"} type={"email"}/>
			<InputField placeholder={"Phone:"} type={"text"}/>
		</div>
	)
}

export default GeneralInfoInputs;