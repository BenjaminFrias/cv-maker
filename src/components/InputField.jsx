import "../styles/InputField.css"

function InputField({type, placeholder}) {
  return <input type={type} placeholder={placeholder} className="input-field" required="true"></input>
}

export default InputField;
  