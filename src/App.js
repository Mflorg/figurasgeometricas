import React from 'react'
import ListShapes from './components/ListShapes'

function App() {

  return (
    <div className="App">
      <header className="row center">
        <h1 className='navTitle'> 2D Shapes </h1>
      </header>
      <main>
        <ListShapes/>
      </main>
      <footer className="row center">
        Developer by Florencia Gonzalez
      </footer>
   
    </div>
  );
}

export default App;
