import "../styles/InputSection.css"

function InputSection({title, children}) {
	return (
		<div className="input-section">
		<h2>{title}</h2>
			{children}
		<hr />
		</div>
	)
}

export default InputSection;