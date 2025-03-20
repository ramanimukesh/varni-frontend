import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import Kitchen from './pages/Services/Kitchen';
import Bathroom from './pages/Services/Bathroom';
import Laundry from './pages/Services/Laundry';
import Quartz from './pages/Services/Quartz';
import Flooring from './pages/Services/Flooring';
import Vendor from './pages/Vendor';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("SWC");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vendor" element={<Vendor/>}/>
            <Route path= "/kitchen" element={<Kitchen/>}/>
            <Route path= "/bathroom" element={<Bathroom/>}/>
            <Route path= "/laundry" element={<Laundry/>}/>
            <Route path= "/flooring" element={<Flooring/>}/>
            <Route path= "/quartz" element={<Quartz/>}/>
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
