import Form from "./Form";
import "../styles/InputPage.css"

function InputPage({handlePageChangeClick, handleInputValues, inputValues, sectionHandlers,}) {

    return (
      <div className="input-page-container">
        <h1>Create your CV!</h1>
        <Form handlePageChangeClick={handlePageChangeClick}
          handleInputValues={handleInputValues} inputValues={inputValues} sectionHandlers={sectionHandlers}
        />
      </div>
    )
  }

export default InputPage;