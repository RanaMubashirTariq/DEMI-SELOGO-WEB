import './App.css';
import AdsCard from './Components/AdsCard';
import Footer from './Components/Footer';
import MainSection from './Components/MainSection';
import MultipleCards from './Components/MultipleCards';
import NavbarSection from './Components/NavbarSection';
import ShopingCard from './Components/ShopingCard';
import Slider from './Components/Slider';

function App() {
  return (
    <div className='App'>
       <NavbarSection/>
       <ShopingCard/>
       <AdsCard/>
       <MultipleCards/>
       <Footer/>
    </div>
  );
}

export default App;
