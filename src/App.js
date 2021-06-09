import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA'

export const hey = React.createContext()
export const colorContext =React.createContext()
function App() {
  return (
    <div className="App">
      <hey.Provider value={'smith'}>
        <colorContext.Provider value={'red'}>
     <ComponentA/>
     </colorContext.Provider>
     </hey.Provider>
    </div>
  );
}

export default App;
