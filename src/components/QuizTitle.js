import React from 'react'

const QuizTitle = ({quizTitle}) => {

  return (
      <div className="pl-5 mt-5">
        {quizTitle.map((title, index) => 
        <div className="quizTitle mb-4 w-50 p-3">
          <p>{title.quizTitle}</p>
          <button className="btn btn-primary">Add Questions</button>
          <button className="btn btn-danger ml-3">Delete Questions</button>
        </div>
        )}
      </div>
  )
}

export default QuizTitle
