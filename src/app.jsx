import { useState } from 'react'
import Editbar from './components/editbar';
import Displaybar from './components/displaybar';

function App()
{ 
  const [renderVar,setRender] = useState(false);

  return (
    <div className='main-container'>
      <Editbar renderVar = {renderVar} setRender={setRender}/>
      <Displaybar />
    </div>

  );
  }

export default App;