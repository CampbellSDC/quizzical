import React, {useEffect, useState} from 'react'
import {nanoid} from 'nanoid'
import he from 'he'
import Intro from './Components/Intro'
import Questions from './Components/Questions'
import './App.css'

function App() {


    const [quizQuestions, setQuizQuestions] = useState([])
    const [quizStarted, setQuizStarted] = useState(false)
    const [selectedAnswers, setSelectedAnswers] = useState({})
    
    
    
  
  
 const fetchQuestions = async () =>  {

  
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple")
    const data = await response.json()
      const items = data.results.map((item)=> ({
        ...item,
        id:nanoid()
      }))
      
      setQuizStarted(true)
     setQuizQuestions(items)
     }


  

const handleAnswerSelection = (questionId, selectedAnswer) => {
  setSelectedAnswers((prevAnswer) => ({
    ...prevAnswer,
    [questionId]: selectedAnswer
  }))
}

 const theQuiz = quizQuestions.map(item => <Questions
        key={item.id}
        question = {he.decode(item.question)}
        correct_answer={item.correct_answer}
        incorrect_answers={item.incorrect_answers}
        selectedAnswer={selectedAnswers[item.id]}
        onSelectAnswer={(selectedAnswer) => handleAnswerSelection(item.id, selectedAnswer)}
  
  />)


  const handleCheckAnswers = () => {
    for(let i=0; i<quizQuestions.length; i++){
    const question = quizQuestions[i]
    const selectedAnswerForQuestion = selectedAnswers[question.id]
    console.log(selectedAnswerForQuestion)
    console.log(question.correct_answer)
      if(selectedAnswerForQuestion === question.correct_answer) {
        console.log("correct!")
      } else {
        console.log("incorrect!")
      }
    }
    
  }


  


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




  return (
    <>

    {quizStarted ?
    <main className="quiz-container">
      {theQuiz}
      <button onClick={handleCheckAnswers} >Check answers</button>
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
