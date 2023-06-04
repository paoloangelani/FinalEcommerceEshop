import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RxStar } from "react-icons/rx";
import feat from "../../styles/img/features/f1.png";
import feat1 from "../../styles/img/features/f2.png";
import feat2 from "../../styles/img/features/f3.png";
import feat3 from "../../styles/img/features/f4.png";
import feat4 from "../../styles/img/features/f5.png";
import feat5 from "../../styles/img/features/f6.png";
import pro1 from "../../styles/img/products/f1.jpg";

const Home = () => {
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
              <Link className="active" to="../Layout/Home.jsx">
                Home
              </Link>
              <Link to="../Layout/Shop.jsx">Shop</Link>
              <Link to="../Layout/Blog.jsx">Blog</Link>
              <Link to="../Layout/About.jsx">About</Link>
              <Link to="../Layout/Contact.jsx">Contact</Link>
              <Link to="../Layout/Cart.jsx">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all product</h1>
        <p>Save more with coupons & up to 70% off</p>
        <button>Shop Now</button>
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

      <section id="product1" className="section-p1">
        <h2>Feautured Product</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          <div className="pro">
            <img src={pro1} alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Astronaut T-shirt</h5>
              <div className="cart">
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
              </div>
              <h4>$78</h4>
            </div>
            <div className="cartLogo">
              <a href="#">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro1} alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Astronaut T-shirt</h5>
              <div className="cart">
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
              </div>
              <h4>$78</h4>
            </div>
            <div className="cartLogo">
              <a href="#">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro1} alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Astronaut T-shirt</h5>
              <div className="cart">
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
              </div>
              <h4>$78</h4>
            </div>
            <div className="cartLogo">
              <a href="#">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro1} alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Astronaut T-shirt</h5>
              <div className="cart">
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
              </div>
              <h4>$78</h4>
            </div>
            <div className="cartLogo">
              <a href="#">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro1} alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Astronaut T-shirt</h5>
              <div className="cart">
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
              </div>
              <h4>$78</h4>
            </div>
            <div className="cartLogo">
              <a href="#">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro1} alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Astronaut T-shirt</h5>
              <div className="cart">
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
              </div>
              <h4>$78</h4>
            </div>
            <div className="cartLogo">
              <a href="#">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro1} alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Astronaut T-shirt</h5>
              <div className="cart">
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
              </div>
              <h4>$78</h4>
            </div>
            <div className="cartLogo">
              <a href="#">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro1} alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Astronaut T-shirt</h5>
              <div className="cart">
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
              </div>
              <h4>$78</h4>
            </div>
            <div className="cartLogo">
              <a href="#">
                <FaShoppingCart />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
