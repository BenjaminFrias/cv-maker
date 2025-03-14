import "../styles/InputField.css"

function InputField({type, section, secIndex, placeholder, inputName=undefined, inputValues=undefined, setInputValue}) {
  const handleChange = (e) => {
    if (section == "general") {
      setInputValue((prevValues) => ({...prevValues, [section]: {...prevValues[section], [inputName]: e.target.value}}));
    } else {
      setInputValue((prevValues) => ({
        ...prevValues,
        [section]: {
          ...prevValues[section],
          [secIndex]: {
            ...prevValues[section][secIndex],
            [inputName]: e.target.value
          }
        }
      }));
    }
  }

  if (section == "general") {
    return <input type={type} placeholder={placeholder} 
    value={inputValues?.[section]?.[inputName] ?? ""} 
    onChange={handleChange} className="input-field" data-name={inputName} required></input>
  } else {
    return <input type={type} placeholder={placeholder} 
    value={inputValues?.[section]?.[secIndex]?.[inputName] ?? ""} 
    onChange={handleChange} className="input-field" data-name={inputName} required></input>
  }
}

export default InputField;
  