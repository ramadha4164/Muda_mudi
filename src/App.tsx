import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="noise relative">
      <Cursor />
      <Nav />
      <main>
        <Home />
        <About />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
