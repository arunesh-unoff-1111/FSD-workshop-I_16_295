import "./App.css";
import UserSignUpForm from "./components/usersignupform.jsx";

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

      {/* USER SIGNUP / LOGIN FORM FIRST */}
      <section className="signup-section">
        <UserSignUpForm />
      </section>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          F-35 Gallery
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* HERO */}
        <section className="hero" id="home">
          <h1>Aircraft Gallery : F - series </h1>
        </section>

        {/* GALLERY */}
        <section className="gallery" id="gallery">
          {galleryImages.map((item) => (
            <div className="gallery-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-info">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 F-35 Gallery</p>
      </footer>

    </div>
  );
}

export default App;