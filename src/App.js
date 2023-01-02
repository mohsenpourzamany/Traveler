import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarTop from './UI/NavbarTop';
import Navbar from './UI/Navbar';
import Home from './Pages/Home';
import Footer from './UI/Footer';
import Socket from './UI/Socket';
import ScrollToTop from "react-scroll-to-top";
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import PackagePage from './Pages/PackagePage';
import ContactPage from './Pages/ContactPage';
import BlogPage from './Pages/BlogPage';
import BlogDescPage from './Pages/BlogDescPage';
import DestinationPage from './Pages/DestinationPage';
import TravelGuide from './Pages/TravelGuide';
import SayClientsPage from './Pages/SayClientsPage';
import Spinner from './UI/Spinner';
import {useEffect , useState} from 'react';
import ProfilePage from './Pages/ProfilePage';
function App() {

  // const[data,setData] = useState([])
  const[loading , setLoading] = useState(false)

  useEffect(()=>{
    getData();
  },[])

  const getData = () =>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000);
    };

  return loading ? (
    <Spinner />
  ) : (
    <div className="App">
      <ScrollToTop />
      <BrowserRouter>
        <NavbarTop />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/aboutpage'  element={<AboutPage/>} />
          <Route path='/servicespage'  element={<ServicesPage/>} />
          <Route path='/packagepage'  element={<PackagePage/>} />
          <Route path='/blogpage'  element={<BlogPage/>} />
          <Route path='/blogdescpage'  element={<BlogDescPage/>} />
          <Route path='/destinationpage'  element={<DestinationPage/>} />
          <Route path='/travelguide'  element={<TravelGuide/>} />
          <Route path='/sayclientpage'  element={<SayClientsPage/>} />
          <Route path='/contactpage'  element={<ContactPage/>} />
          <Route path='/profilpage'  element={<ProfilePage/>} />
        </Routes>
        <Footer />
        <Socket />
      </BrowserRouter>
    </div>
  );
}

export default App;
