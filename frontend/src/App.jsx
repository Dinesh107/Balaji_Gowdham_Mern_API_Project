import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
     
      <Router>
        <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<Home/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
      
    </div>
  )
}

export default App
