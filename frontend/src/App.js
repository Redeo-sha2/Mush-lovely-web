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

      {/* Social Media Section */}
      <section className="section-padding bg-gradient-to-br from-emerald-100 to-green-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="section-title mb-6">Connect With Us</h2>
          <p className="section-subtitle mb-12">
            Follow us on social media for daily updates, recipes, and special offers. Chat with us directly for quick orders!
          </p>
          
          <div className="social-links-grid">
            <a href="https://wa.me/250788123456" target="_blank" rel="noopener noreferrer" className="social-card whatsapp">
              <div className="social-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <div className="social-content">
                <h3 className="social-title">WhatsApp</h3>
                <p className="social-description">Chat with us instantly for quick orders and questions</p>
                <span className="social-handle">+250 788 123 456</span>
              </div>
            </a>

            <a href="https://www.facebook.com/fungirwanda" target="_blank" rel="noopener noreferrer" className="social-card facebook">
              <div className="social-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="social-content">
                <h3 className="social-title">Facebook</h3>
                <p className="social-description">Follow us for updates, recipes, and customer stories</p>
                <span className="social-handle">@fungirwanda</span>
              </div>
            </a>

            <a href="https://www.instagram.com/fungirwanda" target="_blank" rel="noopener noreferrer" className="social-card instagram">
              <div className="social-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="social-content">
                <h3 className="social-title">Instagram</h3>
                <p className="social-description">See behind-the-scenes of our mushroom farming</p>
                <span className="social-handle">@fungirwanda</span>
              </div>
            </a>

            <a href="https://twitter.com/fungirwanda" target="_blank" rel="noopener noreferrer" className="social-card twitter">
              <div className="social-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
              <div className="social-content">
                <h3 className="social-title">Twitter</h3>
                <p className="social-description">Get daily tips and mushroom health benefits</p>
                <span className="social-handle">@fungirwanda</span>
              </div>
            </a>

            <a href="tel:+250788123456" className="social-card phone">
              <div className="social-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="social-content">
                <h3 className="social-title">Call Direct</h3>
                <p className="social-description">Speak with our team for immediate assistance</p>
                <span className="social-handle">+250 788 123 456</span>
              </div>
            </a>

            <a href="mailto:info@fungirwanda.com" className="social-card email">
              <div className="social-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="social-content">
                <h3 className="social-title">Email Us</h3>
                <p className="social-description">Send us detailed inquiries or special requests</p>
                <span className="social-handle">info@fungirwanda.com</span>
              </div>
            </a>
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