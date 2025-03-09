import "../styles/InputField.css"

function InputField({type, placeholder, inputName=null}) {
  return <input type={type} placeholder={placeholder} className="input-field" data-name={inputName} required></input>
}

export default InputField;
  