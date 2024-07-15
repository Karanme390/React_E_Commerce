import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Choco Haven</h1>
        <p>Indulge in the finest chocolates from around the world.</p>
        <Link to="/products" className="cta-button">Shop Now</Link>
      </section>

      <section className="featured-products">
        <h2>Featured Chocolates</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/dark-truffles.jpg" alt="Dark Chocolate Truffles" />
            <h3>Dark Chocolate Truffles</h3>
            <Link to="/product/1" className="button">View Details</Link>
          </div>
          <div className="product-card">
            <img src="/images/milk-bar.jpg" alt="Milk Chocolate Bar" />
            <h3>Milk Chocolate Bar</h3>
            <Link to="/product/2" className="button">View Details</Link>
          </div>
          <div className="product-card">
            <img src="/images/white-pralines.jpg" alt="White Chocolate Pralines" />
            <h3>White Chocolate Pralines</h3>
            <Link to="/product/3" className="button">View Details</Link>
          </div>
          <div className="product-card">
            <img src="/images/assorted-box.jpg" alt="Assorted Chocolate Box" />
            <h3>Assorted Chocolate Box</h3>
            <Link to="/product/4" className="button">View Details</Link>
          </div>
          <div className="product-card">
            <img src="/images/dark-mints.jpg" alt="Dark Chocolate Mints" />
            <h3>Dark Chocolate Mints</h3>
            <Link to="/product/5" className="button">View Details</Link>
          </div>
          <div className="product-card">
            <img src="/images/Chocolate Bars.jpg" alt="Chocolate Bars" />
            <h3>Chocolate Bars</h3>
            <Link to="/product/6" className="button">View Details</Link>
          </div>
        
        </div>
      </section>

      <section className="about-preview">
        <h2>Our Passion for Chocolate</h2>
        <p>At Choco Haven, we believe in creating moments of pure bliss through our meticulously crafted chocolates. Our master chocolatiers combine traditional techniques with innovative flavors to bring you an unforgettable tasting experience.</p>
        <Link to="/about" className="button">Learn More About Us</Link>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"The best chocolates I've ever tasted! Choco Haven is my go-to for all special occasions."</p>
            <p className="customer-name">- Sarah L.</p>
          </div>
          <div className="testimonial-card">
            <p>"Impeccable quality and flavor. These chocolates are truly a cut above the rest."</p>
            <p className="customer-name">- Michael R.</p>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for exclusive offers and chocolate insights!</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="cta-button">Subscribe</button>
        </form>
      </section>
    </div>
  );
}

export default Home;