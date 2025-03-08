import "../styles/ShowPage.css"
import CvResult from "./CvResult";
import CompleteIcon from "../assets/CompleteIcon.jsx";

function ShowPage() {
	return (
		<div className="show-page-container">
			<CompleteIcon/>
			<h2>Here's your CV!</h2>
			<CvResult/>
		</div>
	)
}

export default ShowPage;