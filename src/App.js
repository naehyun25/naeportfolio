import './App.css';
import React, {useRef} from 'react' ;
import { Link } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RoutesIndex from './models/RoutesIndex';
import MainPage from './pages/MainPage';

function App() {

  const hamburgerEffect = useRef();
  function appElement(data){
    data?  hamburgerEffect.current.classList.add('hamburgerOpen') :
    hamburgerEffect.current.classList.remove('hamburgerOpen');
  }

  return (
    <div className="App" ref={hamburgerEffect}>
        <Header appElement={appElement}/>
        <RoutesIndex >
        </RoutesIndex >
        <Footer/>
    </div>
  );
}

export default App;