import './App.scss';
import Header from './components/Header';
import RecipeLists from './components/RecipeLists';
import Tabs from './components/Tabs';
import { useState } from 'react'
function App() {
  const [loader,setLoader] = useState(true);
  return (
    <div className="main">
      <Header />
       <Tabs loader={loader} setLoader={setLoader}/>
      <RecipeLists loader={loader} setLoader={setLoader} />
      {loader && <div className='loader'>
        <div className="spinner"></div>
      </div>}
    </div>
  );
}

export default App;
