//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import SaibaMais from './pages/SaibaMais';

//react router
import {BrowserRouter, Routes, Route} from "react-router-dom";

//styles
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SaibaMais" element={<SaibaMais />} />
          </Routes>
        </div>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

