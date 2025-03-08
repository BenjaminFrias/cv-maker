import "../styles/SubmitBtn.css"

function SubmitBtn({submitHandler}) {
  return <button type="submit" className="submit-btn" onClick={() => submitHandler()}>Submit CV</button>
}

export default SubmitBtn;