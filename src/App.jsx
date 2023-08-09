import React from 'react'
import Intro from './Components/Intro'
import Questions from './Components/Questions'
import './App.css'

function App() {
  const [quizQuestions, setQuizQuestions] = React.useState(getQuiz())

  //TODO: Now that quizQuestions state is established, this will be used in the quiz component
  //TODO: to map over the quizQuestions array, and create a variable that holds 
  //TODO: the 10 questions that are retrieved from the fetch. This will be done
  //TODO: by assigning quizQuestions as a prop for the questions component.

  

  function getQuiz() {

  
    fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple")
    .then(res => res.json())
    .then(data => {
      
      const questions = data.results
      quizReady(questions)

    })
    
  }

  
 



function quizReady(newQuestions){
  setQuizQuestions(newQuestions)
  
}







 


  return (
    <>
      <Intro
        handleClick={getQuiz}
      />

     
      
    </>
  )
}

export default App
