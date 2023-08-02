import './App.css';
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import HighlightSection from './Components/HighlightSection';
import CustomerSay from './Components/CustomerSay';
import Chicago from './Components/Chicago';
import Footer from './Components/Footer';
import BookingForm from './Components/BookingForm';
import ActiveLinkContext,{ ActiveLinkProvider } from './context/ActiveLinkContext';
import { updateTimes,initializeTimes } from './temp.ts';
import { useEffect,useContext,useReducer, useState } from 'react';

function Home(){
  const [active,setActive] = useContext(ActiveLinkContext)
  useEffect(() => {
    setActive("Home")
  },[])
  return(
    <>
      <header>
        <Header />
      </header>
      <main>
        <HeroSection />
        <HighlightSection />
        <CustomerSay />
        <Chicago />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
function Bookings(){
  const [active,setActive] = useContext(ActiveLinkContext)
  const updateTimes = (state,action) => {
    if(action.type === "Base"){
      return state
    }
  }
  const initializeTimes = () => {
    return ["17.00","18.00","19.00","20.00","21.00","22.00"]
  }
  const [avaliableTimes,dispacth] = useReducer(updateTimes,initializeTimes())
  const [date,setDate] = useState()
  useEffect(() => {
    setActive("Reservation");
    document.title = "Reserve a table in little lemon"
  },[date])
  return(
    <main>
      <section className='bookingmain'>
        <BookingForm avaliableTimes={avaliableTimes} dispacth={dispacth} setDate={setDate} />
      </section>
    </main>
  )
}

function App() {
  return (
    <ActiveLinkProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/bookings' element={<Bookings />}/>
        </Routes>
      </Router>
    </ActiveLinkProvider>
  );
}

export default App;
