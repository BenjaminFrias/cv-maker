import Form from "./Form";
import "../styles/InputPage.css"

function InputPage({handlePageChangeClick}) {

    return (
      <div className="input-page-container">
        <h1>Create your CV!</h1>
        <Form handlePageChangeClick={handlePageChangeClick}/>
      </div>
    )
  }

export default InputPage;