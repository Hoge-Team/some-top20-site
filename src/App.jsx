import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChangeNow from './pages/ChangeNow'; 
import Home from './pages/Home';

const App = () => {
  return ( 
  <Router>
    <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route path="/changenow" element={<ChangeNow />} /> 
    </Routes> 
  </Router> 

  );
}

export default App
