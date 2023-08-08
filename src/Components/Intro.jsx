import React from 'react'

export default function Intro(props){

   
    return (

        // TODO: Basic intro page will go here with button to open quiz app

        // TODO: Make sure to set the font family in CSS

        //BASIC H1 TITLE
        // H4 description of quiz if needed
        // Button to start quiz (this will hold the fetch for the API, hide the intro screen, and display the Quiz component)
        <>
        <div className="intro-container">

            <h1 className="intro-title">Quizzical!</h1>

            <h4 className="intro-description">We will randomly select a category, and provide 10 random questions from that category</h4>

            <button onClick={props.handleClick} className='start-btn'>Start Quiz</button>

        </div>
        </>
    )
}