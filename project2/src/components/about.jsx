import { Link, useLocation } from "react-router-dom";

// Automatically get images from src/assets
const imageModules = import.meta.glob(
  "../assets/**/*.{png,jpg,jpeg,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);

const foodImages = Object.values(imageModules);

// ------------------------------------
// Food data
// ------------------------------------
const foodItems = [
  {
    title: "Herbed Rice",
    description:
      "A perfect blend of herbs, rice and fresh veggies."
  },
  {
    title: "Fresh Fruit Bowl",
    description:
      "Naturally sweet, healthy and refreshing."
  },
  {
    title: "Mango Delight",
    description:
      "Juicy, fresh and full of natural goodness."
  },
  {
    title: "Crispy Bites",
    description:
      "Crunchy outside, flavourful inside."
  },
  {
    title: "Stir Fried Noodles",
    description:
      "Hot, spicy and absolutely tasty."
  },
  {
    title: "Samosa Plate",
    description:
      "Crispy samosas with rich flavour."
  }
];

function About() {
  const location = useLocation();

  return (
    <div className="food-page">

      {/* =====================================
          TOP NAVBAR
      ====================================== */}
      <header className="food-navbar">

        {/* Logo */}
        <Link
          to="/dashboard"
          className="food-brand"
        >

          <div className="food-brand-icon">

            <span></span>
            <span></span>

          </div>

          <span>
            FoodPlater
          </span>

        </Link>


        {/* Navigation */}
        <nav className="food-nav-links">

          <Link
            to="/dashboard"
            className={
              location.pathname === "/dashboard"
                ? "active"
                : ""
            }
          >
            Home
          </Link>

          <span className="food-nav-divider"></span>

          <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "active"
                : ""
            }
          >
            About
          </Link>

          <span className="food-nav-divider"></span>

          <Link to="/login">
            Login
          </Link>

          <span className="food-nav-divider"></span>

          <Link to="/signup">
            SignUp
          </Link>

        </nav>

      </header>


      {/* =====================================
          ABOUT CONTENT
      ====================================== */}
      <main className="about-main">

        {/* Heading */}
        <section className="about-heading">

          <div>

            <p className="about-eyebrow">
              ABOUT FOODPLATER
            </p>

            <h1>
              Good Food,
              <br />
              Good Mood <span>♡</span>
            </h1>

            <p className="about-description">
              Discover delicious food made with love,
              passion and the freshest ingredients.
            </p>

          </div>

          <div className="about-heart">
            ♡
          </div>

        </section>


        {/* =====================================
            INTRO CARD
        ====================================== */}
        <section className="about-intro">

          <div className="about-intro-content">

            <p className="about-small-title">
              MADE WITH LOVE
            </p>

            <h2>
              Food that brings
              people together.
            </h2>

            <p>
              FoodPlater is a place where delicious
              flavours meet creativity. From wholesome
              meals to refreshing fruits and crispy
              favourites, every plate is made to bring
              a little more joy to your day.
            </p>

          </div>

          <div className="about-intro-symbol">
            ♡
          </div>

        </section>


        {/* =====================================
            FOOD SECTION
        ====================================== */}
        <section className="about-food-section">

          <div className="about-section-heading">

            <div>
              <p>
                OUR FAVOURITES
              </p>

              <h2>
                Explore Our Plates
              </h2>
            </div>

            <span>
              Fresh · Tasty · Made With Love ♡
            </span>

          </div>


          {/* Food cards */}
          <div className="food-card-grid">

            {foodItems.map((food, index) => {

              const image =
                foodImages[index % foodImages.length];

              return (
                <article
                  className="food-card"
                  key={food.title}
                >

                  {/* Image */}
                  <div className="food-card-image">

                    {image && (
                      <img
                        src={image}
                        alt={food.title}
                      />
                    )}

                  </div>


                  {/* Content */}
                  <div className="food-card-content">

                    <div>

                      <h3>
                        {food.title}
                      </h3>

                      <p>
                        {food.description}
                      </p>

                    </div>

                    <button
                      className="food-arrow"
                      type="button"
                      aria-label={`View ${food.title}`}
                    >
                      →
                    </button>

                  </div>

                </article>
              );

            })}

          </div>

        </section>


        {/* =====================================
            BOTTOM ABOUT SECTION
        ====================================== */}
        <section className="about-bottom">

          <div className="about-bottom-decoration">
            ✦
          </div>

          <div>

            <p>
              GOOD FOOD
            </p>

            <h2>
              Made for every mood.
            </h2>

            <span>
              Eat well. Feel good. Enjoy every bite.
            </span>

          </div>

          <div className="about-bottom-heart">
            ♡
          </div>

        </section>

      </main>

    </div>
  );
}

export default About;