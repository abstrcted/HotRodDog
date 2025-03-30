import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './routes/Menu/index.jsx'
import Landing from './routes/Landing/index.jsx'
import About from './routes/About/index.jsx'
import Location from './routes/Location/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <PageLayout> */}
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
        </Routes>
      {/* </PageLayout> */}
    </div>
  )
}

export default App
