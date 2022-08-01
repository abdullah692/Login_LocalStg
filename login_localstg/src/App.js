import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Cards from './Components/Cards';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact  path="/" element={<Login/>}/>
      <Route  path="/Signup" element={<SignUp/>}/>
      <Route  path="/Cards" element={<Cards/>}/>
     </Routes>
    </div>
  );
}

export default App;
