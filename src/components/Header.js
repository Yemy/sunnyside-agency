import Logo from '../images/logo.svg';
import ArrowDown from '../images/icon-arrow-down.svg';
import ScriptTag from 'react-script-tag';


function Header() {
        
  return(
   <div className="header">
               {/* <!-- header with navbar --> */}
        <section className="header">
          <nav>
            <a href=""><img src={Logo} alt="Logo" /></a>
            <div className="nav-links" id="navLinks">
              <ul>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Projects</a></li>
                <li>
                  <span><a href="" className="hero-btn">CONTACT</a></span>
                </li>
              </ul>
            </div>
            <div className="menu-btn">
              <div className="menu-btn__burger"></div>
            </div>
          </nav>

          <div className="text-box">
            <h1>WE ARE CREATIVES</h1>
            <p><img src={ArrowDown} alt="" /></p>
          </div>
        </section>
       
  </div>
  );
}

export default Header;
