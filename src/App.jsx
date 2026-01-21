import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Page Components
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ForgotPassword from './Pages/ForgotPassword';
import Gallery from './Pages/Gallery';
import Pets from './Pages/Pets';
import Contact from './Pages/Contact';

/* ScrollToTop Component - Ensures page starts at top on navigation */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const darkBrown = '#1a120b';

  return (
    <div className="flex flex-col min-h-screen font-poppins selection:bg-[#ebd9c1]/30">
      {/* Navigation Bar */}
      <Navbar />

      {/* Logic to reset scroll position */}
      <ScrollToTop />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/pet/:id" element={<Pets />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pets" element={<Pets />} />


          {/* Boutique Styled 404 Page */}
          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center h-[70vh] text-center px-6">
                <h1 className="text-8xl font-black mb-4 tracking-tighter" style={{ color: darkBrown }}>
                  404
                </h1>
                <p className="text-sm font-black uppercase tracking-[0.4em] mb-8 opacity-40">
                  Page Not Found
                </p>
                <Link 
                  to="/" 
                  className="px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest text-white transition-transform hover:scale-105 active:scale-95 shadow-xl"
                  style={{ backgroundColor: darkBrown }}
                >
                  Return to Sanctuary
                </Link>
              </div>
            }
          />
        </Routes>
      </main>
      {/* Footer */}
      <Footer />
    </div>

    
  
  );
}

export default App;