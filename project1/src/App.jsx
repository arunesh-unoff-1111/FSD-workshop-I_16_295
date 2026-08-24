import "./App.css";

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";

const galleryImages = [
  {
    id: 1,
    image: img1,
    title: "F-35",
    category: "Ruling In Skiy",
  },
  {
    id: 2,
    image: img2,
    title: "F-35",
    category: "Sleeping",
  },
  {
    id: 3,
    image: img3,
    title: "Ruler Of F-35",
    category: "Be Aware",
  },
  {
    id: 4,
    image: img4,
    title: "F-22 Raptor",
    category: "Neighbourhood Of F-35",
  },
  {
    id: 5,
    image: img5,
    title: "F-22 Raptor",
    category: "Air-Superiority",
  },
];

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-inner">
          <a href="#" className="brand">
            <div className="camera-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 6.5L9.7 4.5H14.3L15.5 6.5H19C20.1 6.5 21 7.4 21 8.5V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V8.5C3 7.4 3.9 6.5 5 6.5H8.5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="13"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </div>

            <span>GALARY</span>
          </a>

          <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#" className="active">
              Gallery
            </a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>

          <button className="theme-button" aria-label="Toggle theme">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.2 15.2C19.3 15.7 18.3 16 17.2 16C13.7 16 10.9 13.2 10.9 9.7C10.9 7.5 12 5.6 13.7 4.4C13.2 4.2 12.6 4.1 12 4.1C7.6 4.1 4 7.7 4 12.1C4 16.5 7.6 20.1 12 20.1C15.9 20.1 19.2 17.3 20.2 13.6C20.3 14.1 20.3 14.7 20.2 15.2Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero */}
        <section className="hero">
          <h1>Glary Gallery</h1>

          <p>Capturing moments, creating memories.</p>

          <div className="hero-line"></div>
        </section>

        {/* Gallery */}
        <section className="gallery">
          {galleryImages.map((item) => (
            <article className="gallery-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="gallery-image"
              />

              <div className="card-overlay"></div>

              <div className="card-content">
                <h2>{item.title}</h2>
                <p>{item.category}</p>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Glary Gallery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;