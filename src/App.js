import './App.css';
import { useEffect } from 'react';
import Body from './components/Body';
import ChallangeEditor from './components/ChallangeEditor';
import Explore from './components/Explore';
import IDE from './components/IDE';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  useEffect(() => {
    /* eslint-disable */
    const scroll = new LocomotiveScroll({
      smooth: true
    })
  }, [])

  return (
    <>
      <Navbar />
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/IDE' element={<IDE />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='//explore/editor' element={<ChallangeEditor />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
