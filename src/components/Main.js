import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import {Routes as Switch, Route} from 'react-router-dom';
import About from './About';
import GalleryBox from './Artwork';

function Main() {
    return (
      <div className="App">
          <Header />
          <Switch>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/artwork" element={<GalleryBox />} />
        </Switch>
        <Footer />
      </div>
    );
  }
  
  export default Main;