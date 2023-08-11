import React, {useState} from 'react'
import {nanoid} from 'nanoid'
import he from 'he'
import Intro from './Components/Intro'
import Questions from './Components/Questions'
import './App.css'

function App() {


    const [quizQuestions, setQuizQuestions] = useState([])
    const [quizStarted, setQuizStarted] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    
  
  
 const fetchQuestions = async () =>  {

  
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple")
    const data = await response.json()

      setQuizQuestions(data.results)
      setQuizStarted(true)
  }


 const theQuiz = quizQuestions.map(item => <Questions
        key={nanoid()}
        clicked={isClicked}
        question={he.decode(item.question)}
        correct_answer={item.correct_answer}
        incorrect_answers={item.incorrect_answers}
        handleClick={() => handleClick(quizQuestions.id)}
  />)

  function handleClick(){
    setIsClicked(!isClicked)
  }

  function clickInput(){
    for(const answer of quizQuestions){
      console.log("answer")
    }
  }

  clickInput()
// On click of answer, highlight the input element
  // {function here}

/** On click of check answers, loop through quizQuestions
 *  Create variable that tracks score, initialize to 0
 * - Loop through clicked answers to check:
 *  -if quiz questions id correct answer == clicked id answer
 *  - disable all input buttons
 *  - increment score
 *  - highlight correct answer in green
 *  - hightlight incorrect answers in red
 *  - display h3 with score
 *  - display "Play again" button

  
*/


  function checkAnswers(){
    console.log(quizQuestions[0].correct_answer)
}


  return (
    <>

    {quizStarted ?
    <main className="quiz-container">
      {theQuiz}
      <button onClick={checkAnswers}>Check answers</button>
    </main>
    
     :
(
<Intro
        handleClick={fetchQuestions}
      />

     )
  }
      

        
      
    </>
  )
}

export default App
