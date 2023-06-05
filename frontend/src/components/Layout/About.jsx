import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import pay from "../../styles/img/pay/app.jpg";
import pay2 from "../../styles/img/pay/play.jpg";
import pay3 from "../../styles/img/pay/pay.png";
import about1 from "../../styles/img/about/a6.jpg";
import video from "../../styles/img/about/1.mp4";
import feat from "../../styles/img/features/f1.png";
import feat1 from "../../styles/img/features/f2.png";
import feat2 from "../../styles/img/features/f3.png";
import feat3 from "../../styles/img/features/f4.png";
import feat4 from "../../styles/img/features/f5.png";
import feat5 from "../../styles/img/features/f6.png";

const About = () => {
  return (
    <div>
      <section id="header">
        <Link to="/">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
          />
        </Link>
        <div>
          <ul id="navbar">
            <li>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/blog">Blog</Link>
              <Link className="active" to="/about">
                About
              </Link>
              <Link to="/contact">Contact</Link>
              <Link to="/cart">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </section>

      <section id="about-head" className="section-p1">
        <img src={about1} alt="" />
        <div>
          <h2>Who are you?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quod
            adipisci voluptas, vitae commodi fuga, sed maiores hic consectetur,
            voluptates aperiam? Itaque id provident ipsam velit ex omnis
            adipisci quas.
          </p>
          <abbr title="">
            Create stunning images with as much or as little control as you like
            thanks to a choice of Basic and Creative modes.
          </abbr>
          <br />
          <br />
          <marquee bgcolor="#ccc" loop="-1" scroolamount="5" width="100%">
            Create stunning images with as much or as little control as you like
            thanks to a choice of Basic and Creative modes.
          </marquee>
        </div>
      </section>

      <section id="about-app" className="section-p1">
        <h1>
          Download our <a href=".">App</a>
        </h1>
        <div className="video">
          <video src={video} autoPlay muted loop></video>
        </div>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src={feat} alt="" />
          <h6>Free Shippin</h6>
        </div>
        <div className="fe-box">
          <img src={feat1} alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src={feat2} alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src={feat3} alt="" />
          <h6>Promotion</h6>
        </div>
        <div className="fe-box">
          <img src={feat4} alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src={feat5} alt="" />
          <h6>Support</h6>
        </div>
      </section>

      <section id="newsLetter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Signup For Newsletters</h4>
          <p>
            Get e-mail updates about our latest shop and{" "}
            <span>special offers.</span>{" "}
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Signup</button>
        </div>
      </section>

      <footer className="section-p1">
        <div className="col">
          <img
            className="logoFooter"
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
          />
          <h4>Contact</h4>
          <p>
            <strong>Address:</strong>
          </p>
          <p>
            <strong>Phone:</strong>
          </p>

          <p>
            <strong>Hours:</strong>
          </p>

          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon"></div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <a href=".">About us</a>
          <a href=".">Delivery Information</a>
          <a href=".">Privacy Policy</a>
          <a href=".">Terms & Condition</a>
          <a href=".">Contact us</a>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <a href=".">Signin</a>
          <a href=".">View Cart</a>
          <a href=".">My WishList</a>
          <a href=".">Track my order</a>
          <a href=".">Help</a>
        </div>

        <div className="col install">
          <h4>Install app</h4>
          <p>From app store and google play</p>
          <div className="row">
            <img src={pay} alt="" />
            <img src={pay2} alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src={pay3} alt="" />
        </div>
        <div className="copyright">
          <p>2023,Pollo etc - Html CSS JS Ecommerce template</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
