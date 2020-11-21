
import './styles/App.scss';
/*

import Footer from './components/footer/footer.jsx';
import Navbar from './components/header/navBar.jsx';
import Navbarwithsearch from './components/header/navbarwithsearch.jsx'
import NavbarLogin from './components/header/loginnavbar.jsx';
import Navbarloggedin from './components/header/navbarloggedin.jsx';
import Categories from './components/landingsection/categories';
import Login from './components/maincomponents/Login.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Cardcomponent from './components/maincomponents/Cardcomponent.jsx';
import Recentlyviewed from './components/landingsection/Recentlyviewed.jsx';

*/


import Homeshop from './components/landingsection/homeshop.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far)

function App() {
  return (
   <div className = 'whole-app'> 
    <Homeshop />
      </div>
   
  );
}

export default App;
