
import './styles/App.scss';
import Footer from './components/footer/footer.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)

function App() {
  return (
   <div className = 'whole-app'> 
     <Footer />
      </div>
   
  );
}

export default App;
