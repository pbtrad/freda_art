import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import {Routes as Switch, Route} from 'react-router-dom';
import About from './About';

function Main() {
    return (
      <div className="App">
          <Header />
          <Switch>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
        </Switch>
        <Footer />
      </div>
    );
  }
  
  export default Main;