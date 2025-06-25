import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-emerald-800">🍄 FungiRwanda</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
              <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
              <button onClick={() => scrollToSection('benefits')} className="nav-link">Benefits</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </div>

            <div className="hidden md:block">
              <button className="cta-button">Order Now</button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
                <button onClick={() => scrollToSection('products')} className="mobile-nav-link">Products</button>
                <button onClick={() => scrollToSection('benefits')} className="mobile-nav-link">Benefits</button>
                <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
                <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
                <button className="cta-button w-full mt-2">Order Now</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="hero-title">
              Premium <span className="text-gradient">Mushrooms</span> for Rwanda
            </h1>
            <p className="hero-subtitle">
              Fresh, organic, and locally sourced mushrooms delivering exceptional nutrition and flavor to your table. 
              Supporting local farmers while nourishing your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="cta-button-large">
                Shop Fresh Mushrooms
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button onClick={() => scrollToSection('about')} className="secondary-button">
                Learn Our Story
              </button>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-mouse"></div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Premium Mushroom Collection</h2>
            <p className="section-subtitle">
              Carefully cultivated varieties, each with unique flavors and exceptional nutritional benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="product-card group">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1730312382521-74814afea12a" alt="Oyster Mushrooms" />
                <div className="product-overlay">
                  <button className="product-cta">Order Now</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-title">Oyster Mushrooms</h3>
                <p className="product-description">Delicate flavor with a velvety texture. Perfect for stir-fries and soups.</p>
                <div className="product-price">2,500 RWF/kg</div>
              </div>
            </div>

            <div className="product-card group">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1723379901977-05a700b6d271" alt="Button Mushrooms" />
                <div className="product-overlay">
                  <button className="product-cta">Order Now</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-title">Button Mushrooms</h3>
                <p className="product-description">Classic versatile mushrooms ideal for any dish. Fresh and flavorful.</p>
                <div className="product-price">2,000 RWF/kg</div>
              </div>
            </div>

            <div className="product-card group">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1608331542023-37dc03862c45" alt="Shiitake Mushrooms" />
                <div className="product-overlay">
                  <button className="product-cta">Order Now</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-title">Shiitake Mushrooms</h3>
                <p className="product-description">Rich umami flavor with impressive health benefits. A gourmet favorite.</p>
                <div className="product-price">3,500 RWF/kg</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section-padding bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="benefits-content">
              <h2 className="section-title text-left">Why Choose Our Mushrooms?</h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">🌱</div>
                  <div>
                    <h3 className="benefit-title">100% Organic</h3>
                    <p className="benefit-description">Grown without chemicals or artificial additives, ensuring pure nutrition.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🚛</div>
                  <div>
                    <h3 className="benefit-title">Fresh Daily Delivery</h3>
                    <p className="benefit-description">Harvested and delivered within 24 hours for maximum freshness.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🇷🇼</div>
                  <div>
                    <h3 className="benefit-title">Supporting Local Farmers</h3>
                    <p className="benefit-description">Every purchase supports Rwandan farmers and sustainable agriculture.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">💚</div>
                  <div>
                    <h3 className="benefit-title">Health Benefits</h3>
                    <p className="benefit-description">Rich in protein, vitamins, and antioxidants for optimal wellness.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefits-image">
              <img src="https://images.pexels.com/photos/32706836/pexels-photo-32706836.jpeg" alt="Healthy Nutrition" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1551357176-67341c5b414f" alt="Rwanda Agriculture" />
            </div>
            <div className="about-content">
              <h2 className="section-title text-left">Rooted in Rwanda's Rich Soil</h2>
              <p className="about-text">
                Founded with a passion for sustainable agriculture and community development, FungiRwanda represents 
                the perfect marriage of traditional farming wisdom and modern cultivation techniques.
              </p>
              <p className="about-text">
                Our mushroom farms are nestled in Rwanda's fertile highlands, where the ideal climate and rich volcanic 
                soil create perfect growing conditions. We work directly with local farmers, providing training and 
                resources to build a thriving mushroom industry that benefits entire communities.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Local Farmers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Happy Customers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-emerald-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">What Our Customers Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The freshest mushrooms I've ever tasted! The delivery is always on time and the quality is exceptional."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Marie Uwimana</h4>
                  <p>Kigali Restaurant Owner</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Supporting local farmers while getting premium quality mushrooms. This is exactly what Rwanda needs!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Jean Claude Habimana</h4>
                  <p>Health Enthusiast</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"My family loves the variety and taste. The nutritional benefits are an added bonus we all appreciate."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Grace Mukamana</h4>
                  <p>Mother of Three</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title text-white mb-6">Ready to Experience Premium Mushrooms?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join hundreds of satisfied customers enjoying fresh, organic mushrooms delivered to their door.
          </p>
          
          <div className="contact-form">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <input type="text" placeholder="Your Name" className="form-input" />
              <input type="tel" placeholder="Phone Number" className="form-input" />
            </div>
            <input type="email" placeholder="Email Address" className="form-input mb-6" />
            <textarea placeholder="Special requests or questions..." className="form-input mb-6" rows="4"></textarea>
            <button className="cta-button-large w-full mb-8">
              Place Your Order Now
            </button>
          </div>

          <div className="contact-info">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="contact-icon">📱</div>
                <h4 className="contact-title">Call Us</h4>
                <p>+250 788 123 456</p>
              </div>
              <div>
                <div className="contact-icon">✉️</div>
                <h4 className="contact-title">Email Us</h4>
                <p>info@fungirwanda.com</p>
              </div>
              <div>
                <div className="contact-icon">📍</div>
                <h4 className="contact-title">Visit Us</h4>
                <p>Kigali, Rwanda</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">🍄 FungiRwanda</h3>
              <p className="text-gray-400">
                Premium mushrooms supporting local farmers and nourishing communities across Rwanda.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Oyster Mushrooms</li>
                <li>Button Mushrooms</li>
                <li>Shiitake Mushrooms</li>
                <li>Custom Orders</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Farmers</li>
                <li>Sustainability</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <span className="text-2xl cursor-pointer hover:text-emerald-400 transition-colors">📘</span>
                <span className="text-2xl cursor-pointer hover:text-emerald-400 transition-colors">📷</span>
                <span className="text-2xl cursor-pointer hover:text-emerald-400 transition-colors">🐦</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FungiRwanda. All rights reserved. Made with ❤️ in Rwanda.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;