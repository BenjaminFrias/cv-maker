import "../styles/InputSection.css"

function InputSection({title, children, type=""}) {
	return (
		<div className={`input-section ${type}`}>
		<h2>{title}</h2>
			{children}
		<hr />
		</div>
	)
}

export default InputSection;