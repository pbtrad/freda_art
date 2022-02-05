import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer';
import {Routes as Switch, Route} from 'react-router-dom';
import About from './About/About';
import GalleryBox from './Artwork/Artwork';
import Contact from './Contact/Contact';
import ScrollToTop from './ScrollToTop';

function Main() {
    return (
      <div className="App">
          <Switch>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/artwork" element={<GalleryBox />} />
              <Route path="/contact" element={<Contact />} />
        </Switch>
      </div>
    );
  }
  
  export default Main;