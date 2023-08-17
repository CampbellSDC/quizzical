import React, { useEffect, useState } from 'react'
import he from 'he'

export default function Questions(props) {
   const [shuffledAnswers, setShuffledAnswers] = useState([])
   const [selectedAnswer, setSelectedAnswer] = useState(null)
   


    useEffect(  () => {
        
        const allAnswers = [...props.incorrect_answers, props.correct_answer]
        
        shuffleArray(allAnswers)
        setShuffledAnswers(allAnswers)
    }, [])



    function shuffleArray(array){
        for(let i = 0; i < array.length; i++){
            let temp = he.decode(array[i])
            let r = Math.floor(Math.random() * array.length)

            array[i] = array[r]
            array[r] = temp

        }
        return array
    }


    
    const handleAnswerClick = (answer) => {
       setSelectedAnswer((prevAnswer) => (prevAnswer === answer ? null : answer))
       
       
      }

      useEffect(() => {
        console.log(selectedAnswer)
      }, [selectedAnswer])
      
      
    
    return (

        
<>
        <div className="question-container">
            <h3 className="question">{props.question}</h3>
            <div className="answer-container">
                {shuffledAnswers.map((value, index) => (
                    <input 
                    type="button" 
                    key={index} 
                    value={value}  
                    onClick={() => props.onSelectAnswer(value)}
                    className={[
                        props.selectedAnswer === value ? "clicked" : "",
                        props.isCorrect && props.correct_answer === value ? "correct" : "",
                        !props.isCorrect && selectedAnswer ? "incorrect" : ""
                       
                    ].join(" ")
                       
                        
                        
                    }
                    />)
                )}
        
            </div>
        </div>
        
</>

    )

}