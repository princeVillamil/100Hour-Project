import React from 'react'
import Message from './Message'

export default function GameChat() {
  const submitActions = (e)=>{
    console.log('Clicked')
    e.preventDefault()
  } 


  return (
    <div className='GameChat'>
      <div className="chatBox">
        <Message/>
        <Message/>
        <Message/>

      </div>
      <form action="" className='sendGuess'>
        <input type="text"/>
        <button type='submit' onClick={(e)=>submitActions(e)}>Guess</button>
      </form>
    </div>
  )
}

