import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const QuizBuilder = () => {



  let [quizTitles, setQuizTitles] = useState([]);
  let [searchQuizTitle, setSearchQuizTitle] = useState("");
  let [addQuizTitles, setAddQuizTitles] = useState("")

  let jwt = localStorage.getItem('jwt_token');

  useEffect(() => {
    getQuizTitles();
  }, []);

  async function getQuizTitles (){
    let response = await fetch(`https://squarify-restful-api.herokuapp.com/api/v1/quizzes`, {
      headers: {
        'jwt_token':jwt,
      },
    })
    let quizTitles = await response.json();
    setQuizTitles(quizTitles.data);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddQuizTitles({ ...addQuizTitles, [name]: value });
  };

  const handleFilterChange = (e) => {
    setSearchQuizTitle(e.target.value);
  };

  async function addQuizTitle(e){
    e.preventDefault()
    let response = await fetch('https://squarify-restful-api.herokuapp.com/api/v1/quizzes',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'jwt_token':jwt,
      },
      body: JSON.stringify(addQuizTitles)
    })
    getQuizTitles();
  }
  

  async function deleteQuizTitle(id) {
    let password = prompt(
      "Please enter in the password to delete the question",
      ""
    );
    if (password === "delete") {
      let deleteQuiz = await fetch(`https://squarify-restful-api.herokuapp.com/api/v1/quizzes/${id}`,{
        headers: {
          'jwt_token':jwt,
        },
        method: "DELETE"
      })
      getQuizTitles();
    }
  }

  let filteredTopic = quizTitles.filter((quizTitle) => {
    const topic = quizTitle.title.toLowerCase();

    return topic.includes(searchQuizTitle.toLowerCase());
  });

  return (
    <>
      {/*Build Your Quiz*/}
      <div className="d-flex justify-content-center">
        <h1>Build Your Quiz</h1>
      </div>

      <form onSubmit={addQuizTitle} className="ml-5">
        <div className="form-group">
          <label htmlFor="quizTitle">Add Quiz Title</label>
          <div className="d-flex">
            <input
              type="text"
              onChange={handleInputChange}
              className="form-control w-25"
              id="title"
              name="title"
              value={quizTitles.topic}
            />
            <button type="submit" className="btn btn-info ml-3">Submit</button>
          </div>
        </div>
      </form>

      <div className="searchbar ml-5 mt-5">
        <input
          placeholder="Type to search topics"
          className="p-1 w-50"
          onChange={handleFilterChange}
          type="text"
        />
      </div>

      {/*Quiz Titles*/}

      <div className="pl-5 mt-5">
        {filteredTopic.map((title, index) => (
          <div key={index} className="quizTitle mb-4 w-50 p-3">
            <p>{title.title}</p>
            <Link to={`/addquestion/${title._id}`}>
              <button className="btn btn-primary">Add Questions</button>
            </Link>
            <button
              onClick={() => deleteQuizTitle(title._id)}
              id={title._id}
              className="btn btn-danger ml-3"
            >
              Delete Questions
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuizBuilder;
