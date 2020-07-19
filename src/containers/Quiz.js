import React, { useState, useEffect } from "react";
import Flashcard from '../components/Flashcard'


const Quiz = (props) => {
  const [number, setNumber] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
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
  }

  return (
    <div>
      <Flashcard 
        quizQuestions={quizQuestions}
        number={number}
        decreaseNumber={decreaseNumber}
        increaseNumber={increaseNumber}
        displayAnswer={displayAnswer}
        showAnswer={showAnswer}
      />
    </div>
  );
};

export default Quiz;
