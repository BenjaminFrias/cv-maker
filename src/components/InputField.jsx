import "../styles/InputField.css"

function InputField({type, section, placeholder, inputName=undefined, inputValues=undefined, setInputValue}) {
    

  const handleChange = (e) => {
    setInputValue({...inputValues, [section]: {...inputValues[section], [inputName]: e.target.value}});
  }
 
  return <input type={type} placeholder={placeholder} value={inputValues?.[section]?.[inputName] ?? ""} onChange={handleChange} className="input-field" data-name={inputName} required></input>
}

export default InputField;
  