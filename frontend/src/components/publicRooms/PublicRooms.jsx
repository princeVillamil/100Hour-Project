import './publicrooms.css'

function PublicRooms() {
  return (
    <div className='playerRoomUi'>
      <img src="" alt="" />
      <div className="playerOwnerUi">
        <span>Room owner:</span>
        <h6>Jambo</h6>
      </div>
      <div className="playerJoinUi">
        <a href="">Join</a>
        <span>Players: 0/10</span>
      </div>
    </div>
  )
}

export default PublicRooms