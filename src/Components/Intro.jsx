import React from 'react'

export default function Intro({handleClick}){

   
    return (

       
        <>
        <div id="intro-container">

            <h1 className="intro-title">Quizzical!</h1>

            <h4 className="intro-description">We will randomly select a category, and provide 10 random questions from that category</h4>

            <button onClick={handleClick} className='start-btn'>Start Quiz</button>

        </div>
        </>
    )
}