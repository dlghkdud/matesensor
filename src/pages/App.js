import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from '../Layout';
import Home from './Home';
import About from './About';
import Mating from './Mating';
import Matingchat from './Matingchat';
import My from './My';
import Login from './Login';
import Signup from './Signup';    

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
    </Routes>
  );
}

export default App;
