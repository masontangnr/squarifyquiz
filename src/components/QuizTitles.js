import React from 'react'
import { Link } from "react-router-dom";


const QuizTitles = ({filteredTopic, deleteQuizTitle}) => {
  return (
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
  )
}

export default QuizTitles
