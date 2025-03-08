function CvResult() {
    return <>
        <div className="cv-result">
            <h2>Carles Puyol Saforcada</h2>
            <hr/>
            <div className="general-info-container">
                <p className="email">contact@carlespuyol.com</p>
                <p className="phone">917572XXXX</p>
            </div>
            <hr/>

            <div className="section-container">
                <h2>Educational experience</h2>

                <div className="section">
                    <p className="school-name">La Masia</p>
                    <p className="title-of-study">Canterano</p>
                    <p className="date">2 de octubre de 1999</p>
                </div>
            </div>
            <hr/>

            <div className="section-container">
                <h2>Practical experience</h2>

                <div className="section">
                    <p className="company-name">Fútbol Club Barcelona "B"</p>
                    <p className="position-title">Lateral derecho</p>
                    <p className="main-responsabilities">Defender y atacar</p>
                    <p className="date">13/04/1995 - 23/10/1996</p>
                </div>

                <div className="section">
                    <p className="company-name">Barcelona F.C</p>
                    <p className="position-title">Defensor central</p>
                    <p className="main-responsabilities">Defender y capitan</p>
                    <p className="date">02/10/1999 - 04/03/2014</p>
                </div>
            </div>
            <hr/>
        </div>

        <button type="button">Edit CV</button>
    </>
}

export default CvResult;