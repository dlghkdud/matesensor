import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Mating from './pages/Mating';
import Matingchat from './pages/Matingchat';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Signupemail from './pages/Signupemail';
import Loginemail from './pages/Loginemail'
import app from './firebase';
import My from './pages/My';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/mating' element={<Mating />} />
        <Route path='/matingchat' element={<Matingchat />} />
        <Route path='/my' element={<My />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signupemail' element={<Signupemail />} />
      <Route path='/loginemail' element={<Loginemail />} />
    </Routes>
  );
}

export default App;
