import "./InputField"

function PracticalInputs() {
  return (
    <div>
      <InputField placeholder={"Company Name:"} type={"text"}/>
      <InputField placeholder={"Position title:"} type={"text"}/>
      <InputField placeholder={"Main responsabilities of the job:"} type={"text"}/>
    <div className="from-until-container">
      <InputField placeholder={"From:"} type={"date"}/>
      <InputField placeholder={"Until:"} type={"date"}/>
    </div>
    </div>
  )
}

export default PracticalInputs;
  