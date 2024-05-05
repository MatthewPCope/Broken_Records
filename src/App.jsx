import './index.css'
import Main from './components/Main'
import Shows from './components/Shows'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
    <Routes>
        <Route index element={<Main />}/> 
          <Route path="/upcomingshows" element={<Shows />}/>
          <Route path="/about" element={<About />}/>
      </Routes>
    </>
  )
}

export default App
