// Corrected import statements in src/components/App.js
import React from 'react';
import About from '../components/about'
import Shop from '../components/shop';   // Updated relative path
import './shop.css';
import './about.css';

function App() {
  return (
    <div>
      <h1>Welcome!</h1>
      <About />
      <Shop />
    </div>
  );
}

export default App;
