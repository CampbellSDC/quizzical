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
    const [gameOver, setGameOver] = useState(false) //Needs to be used for when to apply styling logic for shading background of correct/incorrect answers
    
    
    
  
  
 const fetchQuestions = async () =>  {

  
    const response = await fetch("https://opentdb.com/api.php?amount=5&category=17&difficulty=medium&type=multiple")
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

  

  let score = 0
  const handleCheckAnswers = () => {
    console.log(selectedAnswers)
  const updatedQuizQuestions = quizQuestions.map((question) => {
    const selectedAnswerForQuestion = selectedAnswers[question.id]
    setGameOver(true)
    if(selectedAnswerForQuestion === question.correct_answer){
      score++
      

      //  *  - display h3 with score
      //  *  - display "Play again" button

      return {...question, isCorrect:true}
     

    } else {
      return {...question, isCorrect:false}
    }
  })
  
  setQuizQuestions(updatedQuizQuestions)
  console.log(updatedQuizQuestions)
  console.log(score)
  }





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
