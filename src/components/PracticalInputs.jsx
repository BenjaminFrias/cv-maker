import InputField from "./InputField";

function PracticalInputs() {
  return (
    <div>
      <div>
        <InputField placeholder={"Company Name:"} type={"text"} inputName={"companyName"}/>
        <InputField placeholder={"Position title:"} type={"text"} inputName={"position"}/>
        <InputField placeholder={"Main responsabilities of the job:"} type={"text"} inputName={"responsabilities"}/>
        <div className="from-until-container">
          <InputField placeholder={"From:"} type={"date"} inputName={"FromDate"}/>
          <InputField placeholder={"Until:"} type={"date"} inputName={"UntilDate"}/>
        </div>
      </div>
    </div>
  )
}

export default PracticalInputs;
  