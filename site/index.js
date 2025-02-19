import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const Header = () => (
  <header>
    <div className="header-content">
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
      </div>
      <div className="logo">
        <img src="img/smak.png" alt="Домашній Смак" className="logo-img" />
      </div>
      <div className="header-icons">
        <a className="cart" href="cart.html"><i className="fas fa-shopping-cart"></i></a>
        <a className="login" href="login.html"><i className="fas fa-user"></i></a>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Головна</a></li>
          <li><a href="#">Каталог</a></li>
          <li><a href="#">Про нас</a></li>
          <li><a href="#">Контакти</a></li>
          <div className="log">
            <li><button className="login" href="login.html">Увійти</button></li>
            <li><button className="login" href="register.html">Реєстрація</button></li>
          </div>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <div className="hero">
    <img src="path/to/your/image.jpg" alt="Hero" />
    <div className="hero-text">
      <h1>Ласкаво просимо</h1>
      <button>Дізнатися більше</button>
    </div>
  </div>
);

const About = () => (
  <div className="about-content">
    <h2>Про компанію</h2>
    <div className="video-container">
      <button className="video-btn"><i className="fas fa-play"></i></button>
    </div>
    <p>Тут можна додати текст про вашу компанію.</p>
  </div>
);

const Footer = () => (
  <footer>
    <p>&copy; 2025 Домашній Смак. Всі права захищені.</p>
    <div id="map">Тут буде карта</div>
  </footer>
);

const App = () => (
  <div>
    <Header />
    <Hero />
    <About />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
