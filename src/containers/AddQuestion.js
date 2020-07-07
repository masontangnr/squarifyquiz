import React, { useState } from "react";
import QuizQuestion from '../components/QuizQuestion';

const AddQuestion = () => {
  const initialInput = {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    answer: "",
  };

  let questions = [
    {
      question: "What is your name?",
      option: {
        a: "mason",
        b: "sarah",
        c: "jack",
        d: "bob",
      },
      answer: "A",
    },
    {
      question: "What is your favorite Ice Cream?",
      option: {
        a: "vanilla",
        b: "chocolate",
        c: "mango",
        d: "strawberry",
      },
      answer: "C",
    },
  ];


  const [score, setScore] = useState(0);

  return (
    <>
      <div className="d-flex justify-content-center pt-3">
        <h1>Add Questions to Fraction</h1>
      </div>
      <form className="ml-5 mt-4">
        <label className="d-flex" htmlFor="">
          Question:
          <textarea required type="text" className="form-control ml-2 w-75" />
        </label>
        <label className="d-flex" htmlFor="">
          A:
          <input required type="text" className="form-control ml-2 w-75" />
        </label>
        <label className="d-flex" htmlFor="">
          B:
          <input required type="text" className="form-control ml-2 w-75" />
        </label>
        <label className="d-flex" htmlFor="">
          C:
          <input required type="text" className="form-control ml-2 w-75" />
        </label>
        <label className="d-flex" htmlFor="">
          D:
          <input required type="text" className="form-control ml-2 w-75" />
        </label>
        <label className="d-flex" htmlFor="">
          Answer:
          <input required type="text" className="form-control ml-2 w-75" />
        </label>
        <button type="submit" class="btn btn-info mt-3">Submit</button>
      </form>
      <QuizQuestion questions={questions}/>
    </>
  );
};

export default AddQuestion;
