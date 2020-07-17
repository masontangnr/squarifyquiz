import React, { useState, useEffect } from "react";

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

const Quiz = (props) => {
  const [number, setNumber] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  let [quizTitle, setQuizTitle] = useState("")
  let [quizQuestions, setQuizQuestions] = useState([])

  let jwt = localStorage.getItem('jwt_token');

  useEffect(() => {
    getQuizTitle();
  }, []);

  const increaseNumber = () => {
    setShowAnswer(false);
    setNumber(number + 1);
  };
  const decreaseNumber = () => {
    setShowAnswer(false);
    setNumber(number - 1);
  };
  const displayAnswer = () => setShowAnswer(true);

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

  console.log(quizQuestions)

  return (
    <div>
      {quizQuestions.map((question, index) =>
        number === index ? ( //cards display only if the card index matches the current number
          <div className="mt-5 ml-3 mb-3 quizQuestion p-3 w-75">
            <p>
              {index + 1} out of {questions.length} questions{" "}
            </p>
            <h6 className="mb-4">{question.question}</h6>
            <p>A) {question.options.a}</p>
            <p>B) {question.options.b}</p>
            <p>C) {question.options.c}</p>
            <p className="mb-5">D) {question.options.d}</p>
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
              <p className="mt-3">Answer: {question.answer.toUpperCase()}</p>
            ) : null}
          </div>
        ) : null
      )}
    </div>
  );
};

export default Quiz;
