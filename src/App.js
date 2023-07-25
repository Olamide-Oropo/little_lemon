import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import HighlightSection from './Components/HighlightSection';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <HeroSection />
        <HighlightSection />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
