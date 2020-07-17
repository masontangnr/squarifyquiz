import React, { useState, useEffect} from "react";
import QuizQuestion from "../components/QuizQuestion";
import { useHistory, useParams } from "react-router-dom";

const AddQuestion = (props) => {
  let history = useHistory();

  let initialState = {
    question:"",
    optionA:"",
    optionB:"",
    optionC:"",
    optionD:"",
    answer:""
  }

  let [quizTitle, setQuizTitle] = useState("")
  let [quizQuestions, setQuizQuestions] = useState([])
  let [addQuestion, setAddQuestion] = useState("")
  let [edit, setEdit] = useState(false);
  let [editQuizQuestion, setEditQuizQuestion] = useState([initialState])

  let jwt = localStorage.getItem('jwt_token');

  useEffect(() => {
    getQuizTitle();
  }, []);

  async function getQuizTitle (){
    let response = await fetch(`https://squarify-restful-api.herokuapp.com/api/v1/quizzes/${props.match.params.id}`, {
      headers: {
        'jwt_token':jwt,
      },
    })
    let quizTitle = await response.json();
    setQuizQuestions(quizTitle.data.questions);
    setQuizTitle(quizTitle.data.title);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddQuestion({ ...addQuestion, [name]: value });
  };

  async function addQuizTitle(e){
    e.preventDefault()
    let response = await fetch(`https://squarify-restful-api.herokuapp.com/api/v1/quizzes/${props.match.params.id}/questions`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'jwt_token':jwt,
      },
      body: JSON.stringify(addQuestion)
    })
    getQuizTitle();
    window.location.reload();
  }

  async function deleteQuestion(id) {
    let password = prompt(
      "Please enter in the password to delete the question",
      ""
    );
    if (password === "delete") {
      let deleteQuiz = await fetch(`https://squarify-restful-api.herokuapp.com/api/v1/quizzes/${props.match.params.id}/questions/${id}`,{
        headers: {
          'jwt_token':jwt,
        },
        method: "DELETE"
      })
      getQuizTitle();
    }
  }
  

  async function editQuestion(id) {
    history.push(`/addquestion/${props.match.params.topic}/questions/${id}`);
  }

  return (
    <>
      <div className="d-flex justify-content-center pt-3">
      <h1>Add Questions to {quizTitle}</h1>
      </div>
      <form className="ml-5 mt-4">
        <label className="d-flex">
          Question:
          <textarea onChange={handleInputChange} name="question" required type="text" className="form-control ml-2 w-75" />
        </label>
        <label className="d-flex">
          A:
          <input onChange={handleInputChange} name="optionA" required type="text" className="form-control ml-2 w-75" />
        </label>
        <label className="d-flex">
          B:
          <input onChange={handleInputChange} name="optionB" required type="text" className="form-control ml-2 w-75" />
        </label>
        <label className="d-flex">
          C:
          <input onChange={handleInputChange} name="optionC" required type="text" className="form-control ml-2 w-75" />
        </label>
        <label className="d-flex">
          D:
          <input onChange={handleInputChange} name="optionD" required type="text" className="form-control ml-2 w-75" />
        </label>
        <label className="d-flex">
          Answer:
        <select
          required
          className="ml-3 pl-4 pr-4"
          onChange={handleInputChange}
          name="answer"
        >
          <option value=""></option>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
        </select>
        </label>

        {edit ?
        <>
        <button type="submit" onClick={addQuizTitle}  className="btn btn-primary mt-3">
        Edit Questions
        </button> 
         <button onClick={() => setEdit(false)}  className="btn btn-danger mt-3 ml-4">
        Cancel Edit
         </button>
        </> 
        : 
        <button type="submit" onClick={addQuizTitle}  className="btn btn-info mt-3">
        Submit
      </button>
        }
       
      </form>
      <QuizQuestion
        props={props}
        deleteQuestion={deleteQuestion}
        editQuestion={editQuestion}
        quizQuestions={quizQuestions}
        setEdit={setEdit}
      />
    </>
  );
};

export default AddQuestion;
