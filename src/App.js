import React from 'react'
import './App.css'
import Topbox from './Components/Topbox';
function App() {
  return (
    <>
      <div className='containner'>
          <h1 className='todoheading' style={{textAlign: 'center' , color : 'blue'}}>ToDo-List</h1>
        <div className="box">
            <Topbox/>
          </div>
        </div>
      </>
      )
}

      export default App

