import React, { useState } from "react";
import { Link  } from "react-router-dom";


const QuizBuilder = () => {

  const data = [
    {
      topic: "Fractions",
      id:1
    },
    {
      topic: "Graphs",
      id: 2
    }
  ]

  const initialInput = {
    topic: "title",
    id:'hi'
  };
  
  const [quizTitle, setQuizTitle] = useState(data);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuizTitle({ ...quizTitle, [name]: value });
  };

  async function deleteQuestion(id) {
    let password = prompt("Please enter in the password to delete the question", "");
    if (password === "delete") {
     console.log(id)
    }
  }


  return (
    <>
      {/*Build Your Quiz*/}
      <div className="d-flex justify-content-center">
        <h1>Build Your Quiz</h1>
      </div>
      <form action="" className="ml-5">
        <div className="form-group">
          <label htmlFor="quizTitle">Add Quiz Title</label>
          <div className="d-flex">
            <input
              type="text"
              onChange={handleInputChange}
              className="form-control w-25"
              id="quizTitle"
              name="quizTitle"
              value={quizTitle.topic}
            />
            <button className="btn btn-info ml-3">Submit</button>
          </div>
        </div>
      </form>

      {/*Quiz Titles*/}
      <div className="pl-5 mt-5">
        {quizTitle.map((title, index) => 
        <div key={index} className="quizTitle mb-4 w-50 p-3">
          <p>{title.topic}</p>
          <Link to={`/addquestion/${title.topic}`}>
          <button className="btn btn-primary">Add Questions</button>
          </Link>
          <button onClick={() => deleteQuestion(title.id)} id={title.id} className="btn btn-danger ml-3">Delete Questions</button>
        </div>
        )}
      </div>
    </>
  );
};

export default QuizBuilder;
