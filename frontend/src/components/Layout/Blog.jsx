import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import pay from "../../styles/img/pay/app.jpg";
import pay2 from "../../styles/img/pay/play.jpg";
import pay3 from "../../styles/img/pay/pay.png";
import b1 from "../../styles/img/blog/b1.jpg";
import b2 from "../../styles/img/blog/b2.jpg";
import b3 from "../../styles/img/blog/b3.jpg";
import b4 from "../../styles/img/blog/b4.jpg";
import b5 from "../../styles/img/blog/b5.jpg";

const Blog = () => {
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
              <Link className="active" to="/blog">
                Blog
              </Link>
              <Link to="../Layout/About.jsx">About</Link>
              <Link to="../Layout/Contact.jsx">Contact</Link>
              <Link to="../Layout/Cart.jsx">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>

        <p>Read all case studies about our products!</p>
      </section>

      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src={b1} alt="" />
          </div>
          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quasi labore aut laudantium quibusdam perferendis, quas animi quae
              accusamus hic unde odit perspiciatis est nihil modi facere?
              Repudiandae, voluptatum unde.
            </p>
            <a href=".">
              <button>Continue reading</button>
            </a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={b2} alt="" />
          </div>
          <div className="blog-details">
            <h4>How to style a quiff</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quasi labore aut laudantium quibusdam perferendis, quas animi quae
              accusamus hic unde odit perspiciatis est nihil modi facere?
              Repudiandae, voluptatum unde.
            </p>
            <a href=".">
              <button>Continue reading</button>
            </a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={b3} alt="" />
          </div>
          <div className="blog-details">
            <h4>Must have Skater Girls Items</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quasi labore aut laudantium quibusdam perferendis, quas animi quae
              accusamus hic unde odit perspiciatis est nihil modi facere?
              Repudiandae, voluptatum unde.
            </p>
            <a href=".">
              <button>Continue reading</button>
            </a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={b4} alt="" />
          </div>
          <div className="blog-details">
            <h4>Runway-Inspired Trends</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quasi labore aut laudantium quibusdam perferendis, quas animi quae
              accusamus hic unde odit perspiciatis est nihil modi facere?
              Repudiandae, voluptatum unde.
            </p>
            <a href=".">
              <button>Continue reading</button>
            </a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={b5} alt="" />
          </div>
          <div className="blog-details">
            <h4>AW20 Menswear Trends</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quasi labore aut laudantium quibusdam perferendis, quas animi quae
              accusamus hic unde odit perspiciatis est nihil modi facere?
              Repudiandae, voluptatum unde.
            </p>
            <a href=".">
              <button>Continue reading</button>
            </a>
          </div>
          <h1>13/01</h1>
        </div>
      </section>

      <section id="pagination" className="section-p1">
        <a href=".">1</a>
        <a href=".">2</a>
        <a href="."></a>
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

export default Blog;
