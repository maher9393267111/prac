import {useState} from 'react'
import './App.css';
import ComA from './pages/componentA'
import ComB from './pages/componentB'
import {Context} from './pages/context'
function App() {
  const [isone,setisone] = useState('maher')
  return (
    <div className="App">
      <h1>React practice hererrr</h1>
<Context.Provider value={[isone,setisone]}>
      <ComA/>
      <ComB/>
      </Context.Provider>
    </div>
  );
}


export default App;
