import React, { useState, useEffect } from "react";
import Flashcard from '../components/Flashcard'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'

const Quiz = (props) => {
  const [number, setNumber] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  let [quizQuestions, setQuizQuestions] = useState([])
  //modal
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

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
    <>
      <Flashcard 
        quizQuestions={quizQuestions}
        number={number}
        decreaseNumber={decreaseNumber}
        increaseNumber={increaseNumber}
        displayAnswer={displayAnswer}
        showAnswer={showAnswer}
      />
      <div>
       <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal size="lg" show={lgShow} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Flashcard 
          quizQuestions={quizQuestions}
          number={number}
          decreaseNumber={decreaseNumber}
          increaseNumber={increaseNumber}
          displayAnswer={displayAnswer}
          showAnswer={showAnswer}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
};

export default Quiz;
