import "../styles/ShowPage.css"
import CvResult from "./CvResult";
import CompleteIcon from "../assets/CompleteIcon.jsx";

function ShowPage({handlePageChangeClick, inputValues}) {
	console.log(inputValues);
	return (
		// TODO: Use new object and display values correctly
		
		<div className="show-page-container">
			<CompleteIcon/>
			<h2>Here's your CV!</h2>
			<CvResult inputValues={inputValues}/>
			<button type="button" className="edit-cv-btn" onClick={() => handlePageChangeClick("editPage")}>Edit CV</button>
		</div>
	)
}

export default ShowPage;