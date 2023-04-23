import './App.css';
import React, {useRef} from 'react' ;
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RoutesIndex from './UI/RoutesIndex';
import MainPage from './pages/MainPage';

function App() {

  const hamburgerEffect = useRef();
  function appElement(data){
    console.log(data)
    data?  hamburgerEffect.current.classList.add('hamburgerOpen') :
    hamburgerEffect.current.classList.remove('hamburgerOpen');
  }

  return (
    <div className="App" ref={hamburgerEffect}>
        <Header appElement={appElement}/>
        <RoutesIndex />
        <MainPage/>
        <Footer/>
    </div>
  );
}

export default App;