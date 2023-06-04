import React, { useState } from "react";
import { Link } from "react-router-dom";
import { productData } from "../../static/data";
import { FaOpencart } from "react-icons/fa";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

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
                <FaOpencart />
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

      <section id="feature">
        <div class="fe-box">
          <img src={feat} alt="" />
          <h6>Free Shippin</h6>
        </div>
      </section>
    </div>
  );
};

export default Home;
