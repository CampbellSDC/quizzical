import React, {useState} from 'react'
import {nanoid} from 'nanoid'
import he from 'he'
import Intro from './Components/Intro'
import Questions from './Components/Questions'
import './App.css'

function App() {


    const [quizQuestions, setQuizQuestions] = useState([])
    const [quizStarted, setQuizStarted] = useState(false)
  
  
 const fetchQuestions = async () =>  {

  
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple")
    const data = await response.json()

      setQuizQuestions(data.results)
      setQuizStarted(true)
  }
  const answersArray = []
  const answers = quizQuestions.map(item => {
    const random = Math.random()
    answersArray.push(item.incorrect_answers)
   
  })
  
  console.log(answersArray)
 const theQuiz = quizQuestions.map(item => <Questions
        key={nanoid()}
        question={he.decode(item.question)}
        correct_answer={item.correct_answer}
        incorrect_answers={item.incorrect_answers}
  />)


  



  function checkAnswers(){
    console.log(quizQuestions)
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
