import React from 'react';
import './App.css';
import Bg from './Components/Bg.jsx'
import Fg from './Components/Fg.jsx';
import Add from './Components/Add.jsx';
import AppProvider from './GlobalState/GlobalAdd.jsx';


function App() {
  return (
      
      <AppProvider>
      <div className="relative w-full h-screen bg-zinc-800">
        
        <Bg />
        

        <Fg />

        <Add />
          
      </div>
      </AppProvider>
      
  );
}

export default App;
