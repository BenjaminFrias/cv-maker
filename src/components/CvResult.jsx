import "../styles/CvResult.css"
import { v4 as uuidv4 } from 'uuid';

function EducationalInfo({schoolName, titleStudy, dateStudy}) {
    return (
        <>   
            <div className="section educational-section">
                <h3 className="school-name">{schoolName}</h3>
                <p className="title-of-study">{titleStudy}</p>
                <p className="date">{dateStudy}</p>
            </div>
        </>
    )
}

function PracticalInfo({companyName, position, responsabilities, fromDate, untilDate}) {
    return <>
        <div className="section-container">
            <h2>Practical experience</h2>

            <div className="section practical-section">
                <h3 className="company-name">{companyName}</h3>
                <p className="position-title">{position}</p>
                <p className="main-responsabilities">{responsabilities}</p>
                <p className="date"><span className="from">{fromDate}</span> - <span className="until">{untilDate}</span></p>
            </div>
        </div>
        <hr/>
    </>
}

function CvResult({inputValues}) {
    const eduElements = [];

    for (let key in inputValues.eduSections) {
      const section = inputValues.eduSections[key];
      const schoolName = section.schoolName;
      const titleStudy = section.titleStudy;
      const dateStudy = section.dateStudy;

      eduElements.push(<EducationalInfo key={uuidv4()} schoolName={schoolName} titleStudy={titleStudy} dateStudy={dateStudy} />)
    }
    
    return <>
        <div className="cv-result">
            <h2 className="name">{inputValues.general.fullName}</h2>
            <div className="general-info-container">
                <p className="email">{inputValues.general.email}</p>
                <p>|</p>
                <p className="phone">{inputValues.general.phone}</p>
            </div>
            <hr/>

            <div className="section-container">
                <h2>Educational experience</h2>
                {eduElements.map(sec => sec)}
            </div>
            <hr/>

        </div>
    </>
}


export default CvResult;