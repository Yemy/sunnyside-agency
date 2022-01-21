import Logo from '../images/footerlogo.svg';
import fb from '../images/icon-facebook.svg'
import ig from '../images/icon-instagram.svg'
import tw from '../images/icon-twitter.svg'
import pt from '../images/icon-pinterest.svg'

function Footer() {
  return( 
  <div className="Footer">
              {/* <!-- footer goes here --> */}
        <div className="footer">
          <img src={Logo} alt="" />
          <div className="footer-link">
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Projects</a></li>
            </ul>
          </div>
          {/* <!-- social links --> */}
          <div className="icons" id="main">
            <a href="https://www.facebook.com/yemibold/"><img src={fb} alt="" /></a>
            <a href="https://www.instagram.com/yemibold/"><img src={ig} alt="" /></a>
            <a href="https://twitter.com/yemybold/"><img src={tw} alt="" /></a>
            <a href="#"><img src={pt} alt="" /></a>
          </div>
        </div>
        {/* <!-- footer bottom --> */}
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://yemi-bold.web.app/">Yemi Bold</a>.
        </div>

  </div>
  );
}

export default Footer;
