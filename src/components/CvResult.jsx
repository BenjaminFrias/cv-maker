import "../styles/CvResult.css"
import { v4 as uuidv4 } from 'uuid';
import { EducationalInfoElem, PracticalInfoElem } from "./SectionInfoElems";


function CvResult({inputValues}) {
   const eduElements = (Object.values(inputValues.eduSections).map(section => {
        return <EducationalInfoElem key={uuidv4()} schoolName={section.schoolName}
        titleStudy={section.titleStudy} dateStudy={section.dateStudy} />
    }));

   const pracElements = (Object.values(inputValues.pracSections).map(section => {
        return <PracticalInfoElem key={uuidv4()} companyName={section.companyName}
        position={section.position} responsabilities={section.responsabilities}
        fromDate={section.fromDate} untilDate={section.untilDate} />
    }));
    
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

            <div className="section-container">
                <h2>Practical experience</h2>
                {pracElements.map(sec => sec)}
            </div>
            <hr/>
        </div>
    </>
}


export default CvResult;