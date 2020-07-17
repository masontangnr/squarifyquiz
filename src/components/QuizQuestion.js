import React from 'react'

const QuizQuestion = ({props,deleteQuestion, editQuestion, quizQuestions, setEdit}) => {

  console.log(props.match.params.id);

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <h1>Quiz Questions</h1>
      </div>
      <div className="ml-5">
        {quizQuestions.map((question, index) => 
          <div key={index} className="mt-5 mb-3 quizQuestion p-3 w-75">
            <p>{question.question}</p>
        <p>A) {question.options.a}</p>
        <p>B) {question.options.b}</p>
        <p>C) {question.options.c}</p>
        <p>D) {question.options.d}</p>
        <p>Answer: {question.answer.toUpperCase()}</p>
        <button onClick={() => editQuestion(question._id), () => setEdit(true)} className="btn btn-primary">Edit</button>
        <button onClick={() => deleteQuestion(question._id)} className="btn btn-danger ml-3">Delete</button>
          </div>
        )}
      </div>
    </>
  )
}

export default QuizQuestion
