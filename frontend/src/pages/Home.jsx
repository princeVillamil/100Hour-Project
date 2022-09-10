function Home() {
  return (
    <div className="home container">
      <div className="homeContainer">
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
        <form className="homeBox">
          <div className="homeInput">
            <label htmlFor="userName">User Name</label>
            <input type="text" id="userName" name="userName"/>
          </div>
          <div className="homeInput">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"/>
          </div>
          <div className="homeInput">
            <label htmlFor="passwordOne">Password</label>
            <input type="password" id="passwordOne" name="passwordOne"/>
          </div>
          <div className="homeInput">
            <label htmlFor="passwordTwo">Confirm Password</label>
            <input type="password" id="passwordTwo" name="passwordTwo"/>
          </div>
          <button type="submit">Register</button>
          <a href="/login">Login</a>

        </form>
        <div className="error">
          <h6>Error</h6>
          <span>User name taken.</span>
          <span>Email taken.</span>
        </div>
      </div>
    </div>
  )
}

export default Home