
import './App.css';
import { ShowAlphabet } from './components/ShowAlphabet';
import { Timer } from './components/Timer';
import { Inputbox } from './components/Inputbox';

function App() {

  return (
    <div className='main'>
        <div className="App">
    <div>
      <h3>Type The Alphabet</h3>
      <p style={{fontSize:"13px",lineHeight:"24px"}}>Typing game to see how fast you type.Timer starts when you do :)</p>
    </div>
      <ShowAlphabet/>
      <Timer/>
      
    </div>
    <Inputbox/>
    </div>
    
  );
}

export default App;
