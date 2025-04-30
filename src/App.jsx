
import './assets/styles/global.css'

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from './store/languageReducer';

import Langugage from './components/Language.jsx';
import Hero from './components/Hero.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = localStorage.getItem('appLanguage');
    if (saved) dispatch(setLanguage(saved));
  }, []);

  return (
    <>
      <Langugage />
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
