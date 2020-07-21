import React from 'react'

const Flashcard = ({quizQuestions, number, decreaseNumber, increaseNumber, displayAnswer, showAnswer}) => {
  return (
    <>
       {quizQuestions.map((question, index) =>
        number === index ? ( //cards display only if the card index matches the current number
          <div className="ml-3 mr-3  quizQuestion p-3">
            <p>
              {index + 1} out of {quizQuestions.length} questions
            </p>
            <h6 className="mb-4">{question.question}</h6>
            <p>A) {question.options.a}</p>
            <p>B) {question.options.b}</p>
            <p>C) {question.options.c}</p>
            <p className="mb-5">D) {question.options.d}</p>
            <div className="button-alignment">
              {number > 0 ? (
                <button onClick={decreaseNumber} className="btn btn-primary">
                  Previous Question
                </button>
              ) : null}
              <button onClick={displayAnswer} className="btn  ml-3 btn-success">
                Answer
              </button>
              {quizQuestions.length > index + 1 ? (
                <button onClick={increaseNumber} className="btn ml-3 btn-primary">
                  Next Question
                </button>
              ) : null}
            </div>
            {showAnswer ? (
              <p className="mt-3">Answer: {question.answer.toUpperCase()}</p>
            ) : null}
          </div>
        ) : null
      )}
    </>
  )
}

export default Flashcard
