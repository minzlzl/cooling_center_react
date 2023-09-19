import './App.scss';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './page/Home';
import Main from './page/Main';
import Sub1 from './page/Sub1';
import Sub2 from './page/Sub2';

function App() {
  return (
    <BrowserRouter basename='/cooling_center'>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/main/sub1" element={<Sub1/>}/>
          <Route path="/main/sub2" element={<Sub2/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
