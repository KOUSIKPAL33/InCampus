import './App.css'
import Yummpy from './pages/Yummpy'
import Dominos from './pages/Dominos'
import Kathijunction from './pages/Kathijunction'
import Home from './screens/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mycart from './components/Mycart'
import { ToastContainer } from 'react-toastify'
import Checkout from './components/Checkout'


function App() {
  const token = localStorage.getItem("authToken");
  return (
    <>
      <ToastContainer />
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/yummpy' element={<Yummpy />} />
            <Route exact path='/dominos' element={<Dominos />} />
            <Route exact path='/kathijunction' element={<Kathijunction />} />
            <Route exact path='/Mycart' element={ token? <Mycart />:<Home/>} />
            <Route exact path='/Checkout' element={token?<Checkout />:<Home/>} />
          </Routes>
        </div>
      </Router>

    </>
  )
}

export default App
