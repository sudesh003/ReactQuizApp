import React, { useState } from 'react';
import './questionpageStyle.css';
import { Link } from 'react-router-dom';
import questions from './questions'; // Import the questions array
import { FaHome } from 'react-icons/fa';

function Questionpage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleNextQuestion = () => {
    const labels = document.getElementsByClassName('box');
    Array.from(labels).forEach(label => {
      label.style.backgroundColor = '#282c34'; // Reset background color
      label.style.transition = 'background-color 0.3s'; // Add transition for smooth effect

      // Add hover effect
      label.addEventListener('mouseover', () => {
        label.style.backgroundColor = 'grey';
      });

      label.addEventListener('mouseout', () => {
        label.style.backgroundColor = '#282c34';
      });
    });

    if (currentQuestionIndex + 1 < questions.length) setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    const labels = document.getElementsByClassName('box');
    Array.from(labels).forEach(label => {
      label.style.backgroundColor = '#282c34'; // Reset background color
    });
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  const [currentOptionIdx, setCurrentOptionIndex] = useState(-1);
  const handleSelectOption = (index) => {
    setCurrentOptionIndex(index);
  };

  const handleOptionChange = () => {
    if (currentOptionIdx !== -1) {
      if (currentOptionIdx === currentQuestion.correct) {
        const labels = document.getElementsByClassName('box');
        labels[currentOptionIdx].style.backgroundColor = 'green';
      }
      else {
        const labels = document.getElementsByClassName('box');
        labels[currentOptionIdx].style.backgroundColor = 'red';
        labels[currentQuestion.correct].style.backgroundColor = 'green';
      }
    }
  };

  return (
    <>
      <div className='homebtn'>
        <Link to="/homepage">
          <button className='homebutton'><FaHome size={25}/></button>
        </Link>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <p className="fw-bold">{currentQuestion.question} </p>
            <div>
              <input type="radio" name="box" id="one" value={0} onClick={() => handleSelectOption(0)} />
              <input type="radio" name="box" id="two" value={1} onClick={() => handleSelectOption(1)} />
              <input type="radio" name="box" id="three" value={2} onClick={() => handleSelectOption(2)} />
              <input type="radio" name="box" id="four" value={3} onClick={() => handleSelectOption(3)} />

              <label htmlFor="one" className="box first">
                <div className="course">
                  <span className="circle"></span>
                  <span className="subject">{currentQuestion.options[0]} </span>
                </div>
              </label>

              <label htmlFor="two" className="box second">
                <div className="course">
                  <span className="circle"></span>
                  <span className="subject">{currentQuestion.options[1]} </span>
                </div>
              </label>

              <label htmlFor="three" className="box third">
                <div className="course">
                  <span className="circle"></span>
                  <span className="subject"> {currentQuestion.options[2]} </span>
                </div>
              </label>

              <label htmlFor="four" className="box forth">
                <div className="course">
                  <span className="circle"></span>
                  <span className="subject">{currentQuestion.options[3]}</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='button-container'>
        <div className="prev">
          <button className="prevbtn" onClick={handlePreviousQuestion}>
            Prev
          </button>
        </div>
        <div className="submit">
          <button className="submitbtn" onClick={handleOptionChange}>
            Submit
          </button>
        </div>
        <div className="next">
          <button className="nextbtn" onClick={handleNextQuestion}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Questionpage;
