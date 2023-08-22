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


      useEffect(() => {
         
          console.log(props.incorrect_answers)
        // console.log(selectedAnswer)
        // console.log(props.selectedAnswer)
      }, [selectedAnswer])
      
      
        
     
    
    return (

        
<>
        <div className="question-container">
            <h3 className="question">{props.question}</h3>
            <div className="answer-container">
                {shuffledAnswers.map((value, index) =>{
                    //There is no prop called isCorrect
                    //check this log in your browser.
                    
                    /**
                     * The conditional logic is close... 
                     * 
                     * !props.isCorrect will always evaluate to true and evaluate
                     * the right side of && operator since that prop doesn't exist and
                     * is always undefined (falsy). 
                     * 
                     * You also have to think about the cascade in css. Right now in 
                     * App.css your .clicked styles are above .incorrect. Since they have
                     * the same specificity, .incorrect will win. When you click,
                     * the .clicked class is still being applied, then overwritten by
                     * .incorrect.
                     * 
                     * You need a way to check that the game is over, ie that check answers
                     * is clicked. Once you've been able to determine that the game is over
                     * then you can apply the css styles for correct or incorrect. Until then,
                     * the clicked style is the only style you want to apply.
                     * 
                     * Also, the logic needs to be that the correct answer gets highlighted
                     * whether it was selected or not at the end of the game
                     * 
                     * If you need any more hints, let me know. 
                     */
                return(
                    <input 
                    type="button" 
                    key={index} 
                    value={value}  
                    onClick={() => props.onSelectAnswer(value)}
                    className={
                        props.selectedAnswer === value ? "clicked" : 
                        props.selectedAnswer === value && props.correct_answer === value ? "correct" :
                        props.selectedAnswer === value && props.incorrect_answers === value ? "incorrect" 
                        : ""
            
                      }
                    />)
})}
        
            </div>
        </div>
        
</>

    )

}