
import './styles/App.scss';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

/*


import Navbar from './components/header/navBar.jsx';
import Navbarwithsearch from './components/header/navbarwithsearch.jsx'

import Navbarloggedin from './components/header/navbarloggedin.jsx';
import Categories from './components/landingsection/categories';
import Login from './components/maincomponents/Login.jsx';

import Cardcomponent from './components/maincomponents/Cardcomponent.jsx';
import Recentlyviewed from './components/landingsection/Recentlyviewed.jsx';
import RegisterPage from './pages/Registerpage.jsx';
import Gastric from './components/landingsection/gastric.jsx';
import Carousel from './components/landingsection/carousel.jsx';
import Lowersection from './components/landingsection/lowersection.jsx';



import Homeshop from './components/landingsection/homeshop.jsx';

import NavbarLogin from './components/header/loginnavbar.jsx';
import Footer from './components/footer/footer.jsx';
import LoginPage from './pages/LoginPage.jsx';




*/



import Homepage from './pages/Homepage.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';


library.add(fab, fas, far)

function App() {
  return (
   <div className = 'whole-app'> 
 <Homepage />


      </div>
   
  );
}

export default App;
