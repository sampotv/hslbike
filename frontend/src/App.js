import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import Stations from './components/Stations';
import Statistics from './components/Statistics';
import Frontpage from './components/Frontpage';
import Avg from './components/Avg';
import Allrides from './components/Allrides';
import Top10days from './components/Top10days'
import Top10stations from './components/Top10stations'
import Onestation from './components/Onestation';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Topbar/>
    <h1>HSL Citybikes</h1>
    <Routes>
      <Route path="/" element={ <Frontpage/> }/>
      <Route path="/Stations" element={ <Stations/> }/>
      <Route path="/Statistics" element={ <Statistics/>}/>
      <Route path="/Logout" element={<h2>Logout</h2>}/>
      <Route path="/Avg" element={<Avg/>}/>
      <Route path="/Allrides" element={<Allrides/>}/>
      <Route path="/Top10days" element={<Top10days/>}/>
      <Route path="/Top10stations" element={<Top10stations/>}/>
      <Route path="/Stations/:ID" element={<Onestation/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
