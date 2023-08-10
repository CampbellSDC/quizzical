import React from 'react'

export default function Questions(props) {
   

    
    
    return (

        /** TODO: Need to look at the question API and figure out how many questions 
         I want to use on the quiz.
            - Find number of questions
            - Create state for array of questions
            - Create variable that holds function to create the DOM elements by
                mapping over the state of array questions
                    - Need questions, answers
            - Call variable below in component to render on page

         **/ 
        
<>
        <div className="question-container">
            <h3 className="question">{props.question}</h3>
            <div className="answer-container">
        <input type="button" value={props.correct_answer} />
            </div>
        </div>
</>

    )

}