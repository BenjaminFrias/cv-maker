import Form from "./Form";
import "../styles/InputPage.css"

function InputPage({handlePageChangeClick, handleIsValidForm, handleInputValues, sectionHandlers}) {

    return (
      <div className="input-page-container">
        <h1>Create your CV!</h1>
        <Form handlePageChangeClick={handlePageChangeClick} handleIsValidForm={handleIsValidForm}
          handleInputValues={handleInputValues} sectionHandlers={sectionHandlers}
        />
      </div>
    )
  }

export default InputPage;