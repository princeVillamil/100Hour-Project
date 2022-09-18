import GamePlayerList from '../../components/GamePlayerList'
import GameDraw from '../../components/GameDraw'
import GameChat from '../../components/GameChat'
import './game.css'

function Game() {
  return (
    <div className='game containerTwo'>

      <div className="gameContainer">
        <h1>          
            <span>D</span>
            <span>r</span>
            <span>a</span>
            <span>w</span>
            <span>I</span>
            <span>T</span>
            <span>.</span>
            <span>i</span>
            <span>o</span>
          </h1>
          <div className="gameTopBar">
            <div className="gameLeft">
              <div className="gameTime">
                <span>Time: </span>
                <span>10</span>
              </div>
              <h5>Round 1 of 3</h5>
            </div>
            <div className="gameMiddle">
              <h2>__t__g____df______dfd_</h2>
            </div>
            <div className="gameRight">
              <a href="d">Invite</a> 
              {/* Fix  */}
            </div>
          </div>
          <div className="gameUI">
            <GamePlayerList/>
            <GameDraw />
            <GameChat/>
          </div>
      </div>

    </div>
  )
}

export default Game