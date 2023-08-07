import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import logo from './img/logo.png';
import banner from './img/banner.png';
import search from './img/search.png';
import footerlogo from './img/footerlogo.png';
import twitter from './img/twitter.png';
import facebook from './img/facebook.png';
import insta from './img/insta.png';
import blog from './img/blog.png';
import git from './img/git.png';
import boundary from './img/boundary.png';



function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <div className='nav'>
          <span className='logo'><img src = {logo}/></span>
          <span className='left'>Home</span>
          <span className='left'>About</span>
          <span className='right'>Mating</span>
          <span className='right'>Mating chat</span>
          <span className='right'>New mating</span>
          <span className='right2'>Log in&nbsp;&nbsp;·</span>
          <span className='right2'>&nbsp;&nbsp;Sign up</span>
        </div>

        <div>
          <span className='banner'><img src = {banner}/></span>
        </div>

        <div>
          <button className='residence'>Residence<img className='search' src = {search}/></button>
        </div>

        <div className='footer'>
          <span className='footerlogo'><img src = {footerlogo}/></span>
          <span className='technology'>Technology</span>
          <span className='location'>Location</span>
          <span className='contact'>Contact</span>

          <div className='footercontent'>
            Mate sensor only finds<br/>
            same-sex friends to live<br/>
            with you.<br/>
          </div>
      
          <div className='technologycontent'>
              React<br/>
              CSS<br/>
              JavaScript<br/>
              Firebase
          </div>

          <div className='locationcontent'>
            33-4, Wonhyo-ro 97-gil,<br/>
            Yongsan-gu, Seoul,<br/>
            Republic of Korea
          </div>

          <div className='contactcontent'>
            22sunrin086@sunrint.hs.kr<br/>
            22sunrin081@sunrint.hs.kr<br/>
            22sunrin15@sunrint.hs.kr<br/>
            010&nbsp;5844&nbsp;2040<br/>
            010&nbsp;4559&nbsp;2540<br/>
            010&nbsp;2687&nbsp;6576<br/>
          </div> 

          <div className='site'>
            <img className='twitter' src = {twitter}/>
            <img className='facebook' src = {facebook}/>
            <img className='insta' src = {insta}/>
            <img className='blog' src = {blog}/>
            <img className='git' src = {git}/>
          </div> 

          <div className='boundary' >
            <img src = {boundary}/>
          </div>

          <div className='lastfooter'>
            © 2023 mate sensor
          </div>
        </div>    
      </div>
    </BrowserRouter>
    

  );
}

export default App;
