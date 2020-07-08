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
  
  let [quizTitles, setQuizTitles] = useState(data);
  let [searchQuizTitle, setSearchQuizTitle] = useState("");


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuizTitles({ ...quizTitles, [name]: value });
  };

  const handleChange = (e) => {
    setSearchQuizTitle(e.target.value);
  };

  async function deleteQuestion(id) {
    let password = prompt("Please enter in the password to delete the question", "");
    if (password === "delete") {
     console.log(id)
    }
  }

  let filteredTopic = quizTitles.filter((quizTitle) => {
    
    const topic = quizTitle.topic.toLowerCase()

    return topic.includes(searchQuizTitle.toLowerCase());
  })

  console.log(searchQuizTitle)


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
              value={quizTitles.topic}
            />
            <button className="btn btn-info ml-3">Submit</button>
          </div>
        </div>
      </form>

      <div className="searchbar ml-5 mt-5">
        <input
          placeholder="Type to search topics"
          className="p-1 w-50"
          onChange={handleChange}
          type="text"
        />
      </div>

      {/*Quiz Titles*/}
      
      <div className="pl-5 mt-5">
        {filteredTopic.map((title, index) => 
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
