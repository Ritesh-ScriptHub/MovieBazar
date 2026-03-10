import './App.css'
import MovieCard from './components/MovieCard'
import NavBar from './components/NavBar'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
