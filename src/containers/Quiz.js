import React, { useState } from "react";

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

const Quiz = () => {
  const [number, setNumber] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const increaseNumber = () => {
    setShowAnswer(false);
    setNumber(number + 1);
  };
  const decreaseNumber = () => {
    setShowAnswer(false);
    setNumber(number - 1);
  };
  const displayAnswer = () => setShowAnswer(true);

  return (
    <div>
      {questions.map((question, index) =>
        number === index ? ( //cards display only if the card index matches the current number
          <div className="mt-5 ml-3 mb-3 quizQuestion p-3 w-75">
            <p>
              {index + 1} out of {questions.length} questions{" "}
            </p>
            <h6 className="mb-4">{question.question}</h6>
            <p>A) {question.option.a}</p>
            <p>B) {question.option.b}</p>
            <p>C) {question.option.c}</p>
            <p className="mb-5">D) {question.option.d}</p>
            {number > 0 ? (
              <button onClick={decreaseNumber} className="btn btn-primary">
                Previous Question
              </button>
            ) : null}

            <button onClick={displayAnswer} className="btn btn-success ml-3">
              Answer
            </button>
            {questions.length > index + 1 ? (
              <button onClick={increaseNumber} className="btn btn-primary ml-3">
                Next Question
              </button>
            ) : null}

            {showAnswer ? (
              <p className="mt-3">Answer: {question.answer}</p>
            ) : null}
          </div>
        ) : null
      )}
    </div>
  );
};

export default Quiz;
