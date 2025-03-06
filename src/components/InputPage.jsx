function InputPage() {
    return (
      <form>
          <InputSection title={"General information"}>
            <GeneralInfoInputs/>
          </InputSection>
  
          <InputSection title={"Educational experience"}>
            <EducationalInputs/>
          </InputSection>
          
          <InputSection title={"Practical experience"}>
            <PracticalInputs/>
          </InputSection>
  
          <SubmitBtn/>
      </form>
    )
  }

export default InputPage;