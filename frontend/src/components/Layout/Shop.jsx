import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RxStar } from "react-icons/rx";

import pro1 from "../../styles/img/products/f1.jpg";
import pro2 from "../../styles/img/products/f2.jpg";
import pro3 from "../../styles/img/products/f3.jpg";
import pro4 from "../../styles/img/products/f4.jpg";
import pro5 from "../../styles/img/products/f5.jpg";
import pro6 from "../../styles/img/products/f6.jpg";
import pro7 from "../../styles/img/products/f7.jpg";
import pro8 from "../../styles/img/products/n1.jpg";
import pro9 from "../../styles/img/products/n2.jpg";
import pro10 from "../../styles/img/products/n3.jpg";
import pro11 from "../../styles/img/products/n4.jpg";
import pro12 from "../../styles/img/products/n5.jpg";
import pro13 from "../../styles/img/products/n6.jpg";
import pro14 from "../../styles/img/products/n7.jpg";
import pro15 from "../../styles/img/products/n8.jpg";
import pay from "../../styles/img/pay/app.jpg";
import pay2 from "../../styles/img/pay/play.jpg";
import pay3 from "../../styles/img/pay/pay.png";

const Shop = () => {
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
              <Link className="active" to="/shop">
                Shop
              </Link>
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

      <section id="page-header">
        <h2>#stayathome</h2>

        <p>Save more with coupons & up to 70% off</p>
      </section>

      <section id="product1" className="section-p1">
        <div className="pro-container">
          <div className="pro">
            <img src={pro1} alt="" />
            <div className="des">
              <span>Zara</span>
              <h5>Summer Collection</h5>
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
              <h4>$49</h4>
            </div>
            <div className="cartLogo">
              <a href=".">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro2} alt="" />
            <div className="des">
              <span>Zara</span>
              <h5>Summer Collection</h5>
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
              <h4>$49</h4>
            </div>
            <div className="cartLogo">
              <a href=".">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro3} alt="" />
            <div className="des">
              <span>Zara</span>
              <h5>Summer Collection</h5>
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
              <h4>$49</h4>
            </div>
            <div className="cartLogo">
              <a href=".">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro4} alt="" />
            <div className="des">
              <span>Zara</span>
              <h5>Summer Collection</h5>
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
              <h4>$49</h4>
            </div>
            <div className="cartLogo">
              <a href=".">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro5} alt="" />
            <div className="des">
              <span>Zara</span>
              <h5>Summer Collection</h5>
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
              <h4>$49</h4>
            </div>
            <div className="cartLogo">
              <a href=".">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro6} alt="" />
            <div className="des">
              <span>H&M</span>
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
              <h4>$37</h4>
            </div>
            <div className="cartLogo">
              <a href=".">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro7} alt="" />
            <div className="des">
              <span>Uniqlo</span>
              <h5>Flower Pants</h5>
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
              <h4>$57</h4>
            </div>
            <div className="cartLogo">
              <a href=".">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro8} alt="" />
            <div className="des">
              <span>Mango</span>
              <h5>Korean Shirt</h5>
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
              <h4>$25</h4>
            </div>
            <div className="cartLogo">
              <a href=".">
                <FaShoppingCart />
              </a>
            </div>
          </div>

          <div className="pro">
            <img src={pro8} alt="" />
            <div className="des">
              <span>Mango</span>
              <h5>Korean Shirt</h5>
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
              <h4>$25</h4>
            </div>
            <div className="cartLogo">
              <a href=".">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro9} alt="" />
            <div className="des">
              <span>Mango</span>
              <h5>Classic Shirt</h5>
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
              <h4>$20</h4>
            </div>
            <div className="cartLogo">
              <a href=".">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro10} alt="" />
            <div className="des">
              <span>Mango</span>
              <h5>Korean Shirt</h5>
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
              <h4>$25</h4>
            </div>
            <div className="cartLogo">
              <a href=".">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro11} alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Camo T-shirt</h5>
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
              <h4>$20</h4>
            </div>
            <div className="cartLogo">
              <a href=".">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro12} alt="" />
            <div className="des">
              <span>Mango</span>
              <h5>Jeans Shirt</h5>
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
              <h4>$25</h4>
            </div>
            <div className="cartLogo">
              <a href=".">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro13} alt="" />
            <div className="des">
              <span>Stradivarius</span>
              <h5>Canapa Pants</h5>
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
              <h4>$38</h4>
            </div>
            <div className="cartLogo">
              <a href=".">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro14} alt="" />
            <div className="des">
              <span>Urban</span>
              <h5>Pelagus T-shirt</h5>
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
              <h4>$65</h4>
            </div>
            <div className="cartLogo">
              <a href=".">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro15} alt="" />
            <div className="des">
              <span>Urban</span>
              <h5>Black Shirt</h5>
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
              <h4>$25</h4>
            </div>
            <div className="cartLogo">
              <a href=".">
                <FaShoppingCart />
              </a>
            </div>
          </div>
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

export default Shop;
