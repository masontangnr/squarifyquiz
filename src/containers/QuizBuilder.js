import React, { useState } from "react";
import QuizTitle from '../components/QuizTitle'

const QuizBuilder = () => {

  const data = [
    {
      quizTitle: "Fractions",
      hi:'hi'
    },
    {
      quizTitle: "Graphs",
      hi:'hi'
    }
  ]

  const initialInput = {
    quizTitle: "title",
    hi:'hi'
  };
  
  const [quizTitle, setQuizTitle] = useState(data);

  const listItems = quizTitle.map((number) =>  <li>{number.quizTitle}</li>);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuizTitle({ ...quizTitle, [name]: value });
  };

  console.log(quizTitle);

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Build Your Quiz</h1>
      </div>
      <form action="" className="ml-5">
        <div className="form-group">
          <label for="quizTitle">Add Quiz Title</label>
          <div className="d-flex">
            <input
              type="text"
              onChange={handleInputChange}
              className="form-control w-25"
              id="quizTitle"
              name="quizTitle"
              value={quizTitle.quizTitle}
            />
            <button className="btn btn-info ml-3">Submit</button>
          </div>
        </div>
      </form>
      <QuizTitle quizTitle={quizTitle}/>
    </>
  );
};

export default QuizBuilder;
