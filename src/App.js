import './App.css';
import { Route,Routes} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Login from './routes/Login';
import Menu from './routes/Menu';
import Reservation from './routes/Reservation';
import { ActiveLinkProvider } from './context/ActiveLinkContext';


function App() {
  return (
    <ActiveLinkProvider>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/bookings' element={<Reservation />}/>
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </ActiveLinkProvider>
  );
}

export default App;
