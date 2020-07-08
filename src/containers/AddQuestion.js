import React, { useState } from "react";
import QuizQuestion from '../components/QuizQuestion';
import { useHistory,  useParams } from "react-router-dom";


const AddQuestion = (props) => {

  let history = useHistory();


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
      id:1,
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
      id:2,
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

  async function deleteQuestion(id) {
    let password = prompt("Please enter in the password to delete the question", "");
    if (password === "delete") {
     console.log(id)
    }
  }

  async function editQuestion(id) {
    history.push(`/addquestion/${props.match.params.id}/${id}`)
  }

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
      <QuizQuestion 
        questions={questions} 
        deleteQuestion={deleteQuestion}
        editQuestion={editQuestion}
      />
    </>
  );
};

export default AddQuestion;
