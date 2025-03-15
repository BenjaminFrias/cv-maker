function EducationalInfoElem({schoolName, titleStudy, dateStudy}) {
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

function PracticalInfoElem({companyName, position, responsabilities, fromDate, untilDate}) {
    return <>
        <div className="section practical-section">
            <h3 className="company-name">{companyName}</h3>
            <p className="position-title">{position}</p>
            <p className="main-responsabilities">{responsabilities}</p>
            <p className="date"><span className="from">{fromDate}</span> - <span className="until">{untilDate}</span></p>
        </div>
    </>
}

export {PracticalInfoElem, EducationalInfoElem}