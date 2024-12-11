
import './App.css'

import Carousel from './components/Carousel'
import FilterSection from './components/FilterSection';
import Navbar from './components/Navbar';
import Img1 from '../src/assets/office.jpeg'
import room from '../src/assets/Room3.jpg'
const images = [
  {Img1},
  {room},

];
const dynamicContent = [
  { title: 'Welcome to Millennium Properties', description: 'We Build Your Dreams' },
  { title: 'Luxury Apartment', description: 'Stylish 2-bedroom apartment in city center.' },

];

function App() {

  return(<>
    <div className="font-roboto h-full p-0 m-0 w-full">
    <Navbar/>
    <Carousel images={images} dynamicContent={dynamicContent} />
    <FilterSection/>
    </div>
  </>)
}

export default App
