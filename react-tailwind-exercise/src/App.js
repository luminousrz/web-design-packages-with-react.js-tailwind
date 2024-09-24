
import './App.css';
import AboutUs from './components/aboutUs';
import Features from './components/features';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/navbar';
import News from './components/News';
import Pricing from './components/Pricing';


function App() {
  return (
    <>
    <NavBar></NavBar>
    <Home></Home>
    <Features></Features>
    <AboutUs></AboutUs>
    <Pricing></Pricing>
    <News></News>
    <Footer></Footer>
    </>
  );
}

export default App;
