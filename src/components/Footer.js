import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer className="text-muted py-5 border-top mt-5">
          <div className="container">
              <p className="float-end mb-1">
                  <Link to="#">Back to top</Link>
              </p>
              <p className="mb-1">example</p>
              <p className="mb-0">example <Link to="/">Visit</Link> or read our <Link to="/">guide</Link>.</p>
          </div>
      </footer>
    );
  }
  
  export default Footer;