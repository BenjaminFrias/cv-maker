import "../styles/CvResult.css"

function EducationalInfo({schoolName, titleStudy, dateStudy}) {
    return (
        <>
        <div className="section-container">
           <h2>Educational experience</h2>

            <div className="section educational-section">
                <h3 className="school-name">{schoolName}</h3>
                <p className="title-of-study">{titleStudy}</p>
                <p className="date">{dateStudy}</p>
            </div>
        </div>
        <hr/>   
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

    return <>
        <div className="cv-result">
            <h2 className="name">{inputValues.fullName}</h2>
            <div className="general-info-container">
                <p className="email">{inputValues.email}</p>
                <p>|</p>
                <p className="phone">{inputValues.phone}</p>
            </div>
            <hr/>

            <EducationalInfo schoolName={inputValues.schoolName} titleStudy={inputValues.titleStudy} dateStudy={inputValues.dateStudy}/>
            
            <PracticalInfo companyName={inputValues.companyName} position={inputValues.position}
            responsabilities={inputValues.responsabilities} fromDate={inputValues.fromDate} untilDate={inputValues.untilDate}/>
            
            
        </div>
    </>
}


export default CvResult;