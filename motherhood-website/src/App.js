import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import logo from './images/logo.jpg';
import image from './images/thread.png';
function App() {
  const [page, setPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [opinions, setOpinions] = useState('');
  const [submittedOpinions, setSubmittedOpinions] = useState([]);

  const handleOpinionSubmit = (e) => {
    e.preventDefault();
    if (opinions.trim()) {
      setSubmittedOpinions([...submittedOpinions, opinions.trim()]);
      setOpinions(''); // Clear the input field
    }
  };
  const resources = [
    { title: "12 Tips for Keeping Your Newborn Healthy", url: "https://www.itsmyhealthinsurance.com.au/advice/12-tips-for-keeping-your-newborn-healthy/" },
    { title: "Wiley Online Library: Pregnancy Study", url: "https://onlinelibrary.wiley.com/doi/10.1155/2020/3124847" },
    { title: "Better Health: Pregnancy Week-by-Week", url: "https://www.betterhealth.vic.gov.au/health/healthyliving/pregnancy-week-by-week" },
    { title: "HealthyWomen: Pregnancy and Parenting", url: "https://www.healthywomen.org/content/article/pregnancy-and-parenting-articles" },
    { title: "Healthline: Pregnancy Dos and Don’ts", url: "https://www.healthline.com/health/pregnancy/dos-and-donts#pregnancy-donts" },
    { title: "BMC Medicine: Pregnancy Research", url: "https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-022-02632-6" },
    { title: "American Journal of Obstetrics and Gynecology: Study", url: "https://www.ajog.org/article/S0002-9378(21)02728-9/fulltext" },
    { title: "BMC Pregnancy and Childbirth: Research Article", url: "https://bmcpregnancychildbirth.biomedcentral.com/articles/10.1186/s12884-018-2087-4" },
    { title: "Cleveland Clinic: Fetal Development", url: "https://my.clevelandclinic.org/health/articles/7247-fetal-development-stages-of-growth" },
  ];

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderContent = () => {
    switch (page) {
      case 'community':
  return (
    <div className="community-section">
      <div className="intro-section">
      <div className="intro-box">
      <h2>Welcome to the Community</h2>
      <p>Here you can explore various threads and discover new topics.</p>
      </div>
      </div>
      <div className="content-section">
        <div className="threads">
          <h3 className="section-heading">Threads</h3>
          <img src={image} alt="Thread" className="section-image" />
          <p>Explore recent threads, discussions, and posts from the community.</p>
          {/* Opinion Submission Form */}
          <form onSubmit={handleOpinionSubmit}>
                  <textarea
                    placeholder="Share your opinion..."
                    value={opinions}
                    onChange={(e) => setOpinions(e.target.value)}
                    rows="4"
                    style={{ width: '100%', marginBottom: '10px', borderRadius: '10px', padding: '10px' }}
                  />
                  <button type="submit" style={{ padding: '10px 20px', borderRadius: '10px', backgroundColor: '#5b5f3e', color: 'white' }}>Submit Opinion</button>
                </form>

                {/* Display Submitted Opinions */}
                <div className="submitted-opinions">
                  <h4>Opinions:</h4>
                  <ul>
                    {submittedOpinions.map((opinion, index) => (
                      <li key={index}>{opinion}</li>
                    ))}
                  </ul>
                  </div>
          {/* Additional images below the threads */}
          
          
         
          

        </div>
        <div className="discover">
          <h3 className="section-heading">Discover</h3>
          <img src={image} alt="Discover" className="section-image" />
          
          <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Search topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <ul className="resources-list">
                  {filteredResources.length > 0 ? (
                    filteredResources.map((resource, index) => (
                      <li key={index}>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          {resource.title}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li>No matching topics found.</li>
                  )}
                </ul>
          
          {/* Additional images below discover */}
      
          
        </div>
      </div>
    </div>
  );
  case 'about':
  return (
    <div className="page-content">
      <About />
    </div>
  );
case 'contact':
  return (
    <div className="page-content">
      <Contact />
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
              <h1>welcome to nurture hub</h1>
              <h2>Your ultimate destination for fitness, health, and wellness. 
              Join our community, share your journey, and achieve your goals!</h2>

              
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

<main>{renderContent()}</main>
<Footer setPage={setPage} />
    </div>
  );
}

export default App;
