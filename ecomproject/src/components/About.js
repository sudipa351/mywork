import React from "react";
import "./navbar/style.css";

const About = () => {
  return (
    <div className="about">
      <div className="banner">
        <img src="./assets/contact us.jpeg" alt="" />
      </div>

      <div className="text-center">
        <h1>About Us</h1>
      </div>

      <div className="container">
        <div className="row justify-content-around">
          <img
            className="imageThumb"
            src="./assets/pexels-pixabay-414630.jpg"
            alt=""
          />
          <div className="content">
            <p>
              The Camp K12 course is incredibly effective in helping kids
              develop an understanding of AI and coding through hands-on
              learning. We chose it for our daughter and she loves it. Who
              knows, maybe one day she'll build a career in coding or AI, thanks
              to Camp K12!{" "}
            </p>
            <br />
            <p>
              The Camp K12 course is incredibly effective in helping kids
              develop an understanding of AI and coding through hands-on
              learning. We chose it for our daughter and she loves it. Who
              knows, maybe one day she'll build a career in coding or AI, thanks
              to Camp K12!{" "}
            </p>
          </div>
        </div>

        <div className="row reverse justify-content-around">
          <img
            className="imageThumb"
            src="./assets/pexels-rachel-claire-5865304.jpg"
            alt=""
          />
          <div className="content">
            <p>
              The Camp K12 course is incredibly effective in helping kids
              develop an understanding of AI and coding through hands-on
              learning. We chose it for our daughter and she loves it. Who
              knows, maybe one day she'll build a career in coding or AI, thanks
              to Camp K12!{" "}
            </p>
            <br />
            <p>
              The Camp K12 course is incredibly effective in helping kids
              develop an understanding of AI and coding through hands-on
              learning. We chose it for our daughter and she loves it. Who
              knows, maybe one day she'll build a career in coding or AI, thanks
              to Camp K12!{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center quote">
        <h1>Good Quotes</h1>
        <p className="quoteLine">
          <i className="fas fa-quote-left"></i> Cotopaxi is part a wave of
          successful start-ups who are proving that fundamentally realigning the
          balance between profit and philantropy can generate win-win
          relationships for everyone involved.{" "}
          <i className="fas fa-quote-right"></i>
        </p>
        <div className="d-grid sectionFoot col-3">
          <div>
            <h3>Outside</h3>
          </div>
          <div>
            <h3 className="text-thin">BUSSINESS INSIDER</h3>
          </div>
          <div>
            <h3 className="bg-primary text-white-50">Forbes</h3>
          </div>
        </div>
      </div>

      <div className="container imageFluidSec">
        <div className="row justify-content-center text-center">
          <div className="imageFluid">
            <img src="./assets/pexels-daria-shevtsova-704971.jpg" alt="" />
            <div className="overlay d-grid">
              <h2>DESIGN</h2>
              <p>
                Unique design and 3 layers engineered to provide the plateform
                for you best workout.
              </p>

              <button className="simple">
                <em>Read more</em>
              </button>
            </div>
          </div>

          <div className="imageFluid">
            <img src="./assets/pexels-daria-shevtsova-704971.jpg" alt="" />
            <div className="overlay d-grid">
              <h2>DESIGN</h2>
              <p>
                Unique design and 3 layers engineered to provide the plateform
                for you best workout.
              </p>

              <button className="simple">
                <em>Read more</em>
              </button>
            </div>
          </div>

          <div className="imageFluid">
            <img src="./assets/pexels-daria-shevtsova-704971.jpg" alt="" />
            <div className="overlay d-grid">
              <h2>DESIGN</h2>
              <p>
                Unique design and 3 layers engineered to provide the plateform
                for you best workout.
              </p>

              <button className="simple">
                <em>Read more</em>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-dark">
        <div className="row flex-wrap text-center">
          <div className="paperCard">
            <h2>Our Mission</h2>
            <p>
              Refinery29 is catalyst for women to feel, see, and claim their
              power.
            </p>
          </div>
          <div className="paperCard">
            <h2>Our essence</h2>
            <p>
              At our core, Refinery29 operates on imagination, individuality,
              inclusivity, and impact.
            </p>
          </div>
          <div className="paperCard">
            <h2>Our promise</h2>
            <p>
              We deliver optimistic and diverse storytelling, experiences, and
              points of view to our audience of smart, curious, passionate
              women.
            </p>
          </div>
          <div className="paperCard">
            <h2>Our Vibe</h2>
            <p>
              At Refinery29,we make magic. We dream it, and then do
              it-togather-every day reinventing what's possible.
            </p>
          </div>
        </div>
      </div>

      <div className="container socialSec text-center">
        <h1 className="socialHead">#JOINTHEMVMT</h1>

        <div className="row flex-wrap justify-content-between">
          <div className="socialCard">
            <div className="socialCard-head">
              <i className="fab fa-pinterest"></i>
            </div>
            <div className="socialCard-body">
              <p className="text-thin space-10">46.5k</p>
              <p className="space-5">
                <strong>JOINTHEMVMT</strong>
              </p>
            </div>
          </div>

          <div className="socialCard">
            <div className="socialCard-head">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="socialCard-body">
              <p className="text-thin space-10">400.5k</p>
              <p className="space-5">
                <strong>@mvmtforher</strong>
              </p>
            </div>
          </div>

          <div className="socialCard">
            <div className="socialCard-head">
              <i className="fab fa-facebook"></i>
            </div>
            <div className="socialCard-body">
              <p className="space-5">
                <strong>/mvmt</strong>
              </p>
            </div>
          </div>

          <div className="socialCard">
            <div className="socialCard-head">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="socialCard-body">
              <p className="text-thin space-10">51,81k</p>
              <p className="space-5">
                <strong>@mvmt</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
