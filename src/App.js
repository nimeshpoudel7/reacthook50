import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA'

export const hey = React.createContext()
function App() {
  return (
    <div className="App">
      <hey.Provider value={'smith'}>
     <ComponentA/>
     </hey.Provider>
    </div>
  );
}

export default App;
