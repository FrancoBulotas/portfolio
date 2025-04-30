
import './assets/styles/global.css'

import Hero from './components/Hero.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Hero />
      <Home />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}       
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
