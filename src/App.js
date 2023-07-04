
import './App.css';
import Navbar from './Navbar';
import Choice from './Choice'
import Result from './Result'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const scores=0;
  return (
    <Router>
    <div className="App"> 
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Choice scores={scores}/>}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
