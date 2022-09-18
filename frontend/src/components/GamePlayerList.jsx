import React from 'react'
import GamePlayers from './GamePlayers'

export default function GamePlayerList() {
  return (
    <div className='GamePlayerList'>
      <div className="gamePlayerContainer">
        <GamePlayers/>
        <GamePlayers/>
        <GamePlayers/>
      </div>
      <a href="#">Leave</a>
    </div>
  )
}
