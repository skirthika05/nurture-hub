import React, { useState } from 'react';
import './App.css';

import logo from './images/logo.jpg';
import image from './images/image.png';
function App() {
  const [page, setPage] = useState('home');

  const renderContent = () => {
    switch (page) {
      case 'community':
  return (
    <div className="community-section">
      <div className="content-section">
        <div className="threads">
          <h3 className="section-heading">Threads</h3>
          <img src={image} alt="Thread" className="section-image" />
          <p>Explore recent threads, discussions, and posts from the community.</p>
          {/* Additional images below the threads */}
          <div className="additional-images">
            <img src="path_to_image1.jpg" alt="Additional Thread Image 1" />
            <img src="path_to_image2.jpg" alt="Additional Thread Image 2" />
          </div>
        </div>
        <div className="discover">
          <h3 className="section-heading">Discover</h3>
          <img src={image} alt="Discover" className="section-image" />
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search topics..."
              aria-label="Search topics"
            />
          </div>
          <p>Find new topics and discussions in our community.</p>
          {/* Additional images below discover */}
          <div className="additional-images">
            <img src="path_to_image3.jpg" alt="Additional Discover Image 1" />
            <img src="path_to_image4.jpg" alt="Additional Discover Image 2" />
          </div>
        </div>
      </div>
    </div>
  );




      case 'login':
        return (
          <div className="auth-page">
            <h2>Login</h2>
            <form className="auth-form">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              
              <button type="submit">Login</button>
            </form>
          </div>
        );
      case 'signup':
        return (
          <div className="auth-page">
            <h2>Sign Up</h2>
            <form className="auth-form">
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" required />
              
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              
              <button type="submit">Sign Up</button>
            </form>
          </div>
        );
      default:
        return (
          <main className="home">
            <div className="background-image"></div> {/* Background Image */}
            <div className="intro">
              <h1>Welcome to Our Community</h1>
              <p>Explore the community</p>
            </div>
          </main>
        );
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
  <div className="logo">
    <img src={logo} alt="Your Logo" style={{ height: '50px' }} />
  </div>
  <ul>
    {page === 'home' ? (
      <li><button onClick={() => setPage('community')}>Community</button></li>
    ) : (
      <li><button onClick={() => setPage('home')}>Home</button></li>
    )}
    <li><button>Pregnancy</button></li>
    <li><button>Baby</button></li>
    <li><button>Products</button></li>
  </ul>
  <div className="auth-buttons">
    <button className="login" onClick={() => setPage('login')}>Login</button>
    <button className="signup" onClick={() => setPage('signup')}>Sign up</button>
  </div>
</nav>

      {renderContent()}
    </div>
  );
}

export default App;
