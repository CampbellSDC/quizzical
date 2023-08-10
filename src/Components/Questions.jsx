import React, { useEffect, useState } from 'react'
import he from 'he'

export default function Questions(props) {
   const [shuffledAnswers, setShuffledAnswers] = useState([])

    useEffect(  () => {
        
        const allAnswers = [...props.incorrect_answers, props.correct_answer]
        
        shuffleArray(allAnswers)
        setShuffledAnswers(allAnswers)
    }, [props])

    function shuffleArray(array){
        for(let i = 0; i < array.length; i++){
            let temp = he.decode(array[i])
            let r = Math.floor(Math.random() * array.length)

            array[i] = array[r]
            array[r] = temp

        }
        return array
    }
    

    
    
    return (

        
<>
        <div className="question-container">
            <h3 className="question">{props.question}</h3>
            <div className="answer-container">
                {shuffledAnswers.map((value, index) => (
                    <input type="button" key={index} value={value} />)
                )}
        
            </div>
        </div>
        
</>

    )

}