import InputField from "./InputField";

function GeneralInfoInputs({inputValues, handleInputValues}) {
	return (
		<div>
			<InputField section={"general"} inputValues={inputValues} setInputValue={handleInputValues}  placeholder={"Full name:"} type={"text"} inputName={"fullName"}/>
			<InputField section={"general"} inputValues={inputValues} setInputValue={handleInputValues} placeholder={"Email:"} type={"email"} inputName={"email"}/>
			<InputField section={"general"} inputValues={inputValues} setInputValue={handleInputValues} placeholder={"Phone:"} type={"text"} inputName={"phone"}/>
		</div>
	)
}

export default GeneralInfoInputs;