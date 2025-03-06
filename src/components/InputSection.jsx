function InputSection({title, children}) {
	return (
		<div>
		<h2>{title}</h2>
		<hr />
		{children}
		<hr />
		</div>
	)
}

export default InputSection;