import InputField from "./InputField";

function PracticalInputs({inputValues, handleInputValues, secIndex}) {
  return (
    <div>
      <div>
        <InputField section={"pracSections"} inputValues={inputValues} secIndex={secIndex}
        setInputValue={handleInputValues} placeholder={"Company Name:"} type={"text"} inputName={"companyName"}/>
        <InputField section={"pracSections"} inputValues={inputValues} secIndex={secIndex}
        setInputValue={handleInputValues} placeholder={"Position:"} type={"text"} inputName={"position"}/>

        <InputField section={"pracSections"} inputValues={inputValues} secIndex={secIndex}
        setInputValue={handleInputValues} placeholder={"Responsabilities:"} type={"text"} inputName={"responsabilities"}/>

        <div className="from-until-container">
          <InputField section={"pracSections"} inputValues={inputValues} secIndex={secIndex}
          setInputValue={handleInputValues} placeholder={"From:"} type={"date"} inputName={"fromDate"}/>

          <InputField section={"pracSections"} inputValues={inputValues} secIndex={secIndex}
          setInputValue={handleInputValues} placeholder={"Until:"} type={"date"} inputName={"untilDate"}/>
        </div>
      </div>
    </div>
  )
}

export default PracticalInputs;
  