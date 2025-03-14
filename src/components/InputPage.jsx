import Form from "./Form";
import "../styles/InputPage.css"

function InputPage({handlePageChangeClick, handleIsValidForm, handleInputValues, inputValues, sectionHandlers,}) {

    return (
      <div className="input-page-container">
        <h1>Create your CV!</h1>
        <Form handlePageChangeClick={handlePageChangeClick} handleIsValidForm={handleIsValidForm}
          handleInputValues={handleInputValues} inputValues={inputValues} sectionHandlers={sectionHandlers}
        />
      </div>
    )
  }

export default InputPage;