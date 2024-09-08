import React from "react";
import "./AboutUs.css";
import { FaBlog, FaBullseye, FaCompass } from "react-icons/fa";
import Creator from "../assets/Creator.jpg";

const AboutUs = () => {
  return (
    <main className="about-us-main">
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Welcome to BlogNest</h1>
          <p>
            Welcome to <span className="brand-name">BlogNest</span>. Share your
            thoughts, ideas, and stories with the world. Our platform provides a
            space for you to connect with like-minded individuals, build your
            audience, and make your voice heard. Explore the limitless
            possibilities of blogging with our easy-to-use tools and vibrant
            community.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <FaBlog className="icon" />
            <h2>Our Story</h2>
            <p>
              We started BlogNest to provide a platform for everyone to share
              their unique stories and perspectives. Through our user-friendly
              interface, we aim to empower writers and creators by giving them
              the tools and community support to express themselves.
            </p>
          </div>
          <div className="col-md-4">
            <FaBullseye className="icon" />
            <h2>Our Mission</h2>
            <p>
              Our mission is to make blogging accessible to all, whether you're
              an experienced writer or just starting. We are dedicated to
              providing a space where creativity thrives, and your ideas can
              reach a global audience.
            </p>
          </div>
          <div className="col-md-4">
            <FaCompass className="icon" />
            <h2>Our Vision</h2>
            <p>
              We envision a world where everyone's voice can be heard. BlogNest
              is committed to continuously evolving our platform to support
              diverse voices and innovative content, fostering a community that
              inspires and informs.
            </p>
          </div>
        </div>
      </div>
      <div className="about-card">
        <div className="content">
          <h2>About the Creator</h2>
          <div className="image-container">
            <img
              src={Creator}
              alt="Nishant Chauhan"
              className="creator-image"
            />
          </div>
          <h3>Nishant Chauhan</h3>
          <p>
            Computer Application Student | Web Developer | Freelance Video
            Editor | Digital Marketing
          </p>
          <p>
            I am a Computer Application student with a strong focus on web
            development, video editing, and digital marketing. Combining
            academic knowledge with practical experience, I bring innovative
            solutions to dynamic teams and projects.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
