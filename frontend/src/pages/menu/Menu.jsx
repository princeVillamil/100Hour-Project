import './menu.css'
import { AiOutlineSetting } from "react-icons/ai";
import PublicRooms from '../../components/publicRooms/PublicRooms';

function Menu() {
  return (
    <div className="containerTwo">
      <div className="menuContainer">
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
        <div className="menuOptions">
          <div className="LMenu">
            <div className="LMenuProfile">
              <img src="" alt="" />
              <div className="LMenuProfileDetails">
                <span>UserName</span>
                <span>Points: 0</span>
              </div>
              <div className="LMenuProfileSettings">
                <AiOutlineSetting className='setting'/>
              </div>
            </div>
            <form className="LMenuControlls">
              <div className="homeInput">
                <label htmlFor="roomName">Room name</label>
                <input type="text" id="roomName" name="roomName" required/>
              </div>

              <div className="homeInput select">
                <label htmlFor="rounds">Rounds</label>
                <select id="rounds" name='rounds' required>
                  <option value="volvo">40</option>
                  <option value="saab">50</option>
                  <option value="opel">60</option>
                  <option value="audi">70</option>
                  <option value="audi">80</option>
                  <option value="audi">90</option>
                  <option value="audi">100</option>
                </select>
              </div>

              <div className="homeInput select">
                <label htmlFor="time">Draw time in seconds</label>
                <select id="time" name='time' required>
                  <option value="volvo">2</option>
                  <option value="saab">3</option>
                  <option value="opel">4</option>
                  <option value="audi">5</option>
                </select>
              </div>

              <button type='submit'>Create A Room</button>

              <div className="homeInput checkBox">
                <label className='checkBoxLabel' htmlFor="isPrivate">Private</label>
                <input type="checkbox" id="isPrivate" name="isPrivate"/>
                <div className="checkBoxShow"></div>
              </div>

            </form>
          </div>
          <div className="RMenu">
            <h3>Public Rooms</h3>
            <PublicRooms/>
            <PublicRooms/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu