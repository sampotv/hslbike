import './App.css';
import Footer from './Footer';
import Topbar from './Topbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Topbar/>
    <h1>HSL Citybikes</h1>
    <Routes>
      <Route path="/" element={<h2>Frontpage</h2>}/>
      <Route path="/stations" element={<h2>Bike Stations</h2>}/>
      <Route path="/logout" element={<h2>Logout</h2>}/>
      
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
