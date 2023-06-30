import NavBar from './Navbar.js';
import Footer from './Footer.js';


function Layout(props) {
    return (
        <div>
            
            <NavBar />
       <div>
          {props.children}
      </div>
      <Footer />
      </div>
    );
  }
  
  export default Layout;