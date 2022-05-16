import React from 'react';
import './App.css';
import NavigationBar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Cart from './Components/Cart/cart';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />}/>
           <Route path="cart" element={<Cart />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;