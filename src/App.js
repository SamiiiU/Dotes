import React from 'react';
import './App.css';
import Card from './Components/Card.jsx'
import Bg from './Components/Bg.jsx'
import Fg from './Components/Fg.jsx';

function App() {
  return (
      <div className="relative w-full h-screen bg-zinc-800">
        {/* Background */}
        <Bg />
        {/* ForeGround */}

        <Fg />
          
      </div>
  );
}

export default App;
