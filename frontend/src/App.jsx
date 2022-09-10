import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from "./pages/Login";
import Home from './pages/Home';
import Menu from './pages/menu/Menu'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/>}/>

          <Route path='/login' element={<Login/>}/>

          <Route path='/menu' element={<Menu/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
