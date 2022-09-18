import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

import Login from "./pages/Login";
import Home from './pages/Home';
import Menu from './pages/menu/Menu'
import Game from './pages/game/Game';

function App() {
  const {status} = useParams()

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/>}/>

          <Route path='/login' element={<Login/>}/>

          <Route path='/menu' element={<Menu/>}/>

          <Route path='/game/:status' element={<Game/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
