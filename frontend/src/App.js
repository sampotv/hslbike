import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import Stations from './components/Stations'
import Frontpage from './components/Frontpage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Topbar/>
    <h1>HSL Citybikes</h1>
    <Routes>
      <Route path="/" element={ <Frontpage/> }/>
      <Route path="/Stations" element={ <Stations/> }/>
      <Route path="/Logout" element={<h2>Logout</h2>}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
