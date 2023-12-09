import logo from './logo.svg';
import './App.css';
import ProjectsTable from './single_project_display/interface'
import { useEffect } from 'react';
function App() {

  useEffect(()=>{
    console.log("Hello")
  })

  return (
    <div className="App" style={{fontFamily: 'Roboto Mono, monospace', display: 'flex', justifyContent: 'center'}}>
      <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
      </style>
      <ProjectsTable/>
    </div>
  );
}

export default App;
