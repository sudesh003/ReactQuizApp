import './App.css';
import Homepage from './MyComponents/homepage'
import Questionpage from './MyComponents/questionpage';
import Selectpage from './MyComponents/selectpage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <>
      <Router>
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route exact path="/questionpage" element={<Questionpage/>} />
        <Route exact path='/selectpage' element={<Selectpage />} />
      </Routes>
      </Router>
      </>
  );
}

export default App;
