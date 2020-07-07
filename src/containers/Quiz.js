import React from "react";

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
];

const Quiz = () => {
  return (
    <div>
      {questions.map((question, index) => (
        <div className="mt-5 ml-3 mb-3 quizQuestion p-3 w-75">
          <p>{question.question}</p>
          <p>A) {question.option.a}</p>
          <p>B) {question.option.b}</p>
          <p>C) {question.option.c}</p>
          <p className="mb-5">D) {question.option.d}</p>
          <button className="btn btn-primary">Previous Question</button>
          <button className="btn btn-success ml-3">Answer</button>
          <button className="btn btn-primary ml-3">Next Question</button>
          <p className="mt-3">Answer: {question.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
