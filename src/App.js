import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RoutesIndex from './UI/RoutesIndex';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
        <Header/>
        <RoutesIndex />
        <MainPage/>
        <Footer/>
    </div>
  );
}

export default App;