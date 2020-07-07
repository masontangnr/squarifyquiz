import React from 'react'

const QuizQuestion = ({questions}) => {

  console.log(questions)

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <h1>Quiz Questions</h1>
      </div>
      <div className="ml-5">
        {questions.map((question, index) => 
          <div className="mt-5 mb-3 quizQuestion p-3 w-75">
            <p>{question.question}</p>
        <p>A: {question.option.a}</p>
        <p>B: {question.option.b}</p>
        <p>C: {question.option.c}</p>
        <p>D: {question.option.d}</p>
        <p>Answer: {question.answer}</p>
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger ml-3">Delete</button>
          </div>
        )}
      </div>
    </>
  )
}

export default QuizQuestion
