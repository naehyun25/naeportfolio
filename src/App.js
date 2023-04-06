import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RoutesIndex from './UI/RoutesIndex';
import MainPage from './pages/MainPage';
import MainProject from './components/main/MainProject';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <RoutesIndex />
        <MainPage/>
        <Footer></Footer>
    </div>
  );
}

export default App;
