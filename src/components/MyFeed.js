import React, { useRef, useState, useEffect } from "react";
import Widget from "./Widget"; // Import Widget component
import "./MyFeed.css"; // Import custom styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faChevronLeft,
  faChevronRight,
  faHeart,
  faClock,
  faFire,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons"; // Import icons from FontAwesome

const ArticleCard = ({
  author,
  timeAgo,
  title,
  content,
  likes,
  reads,
  image,
  trending,
}) => {
  return (
    <div className="article-card sliding-card">
      <div className="card-header">
        <img
          src={image || "https://placehold.co/40x40"}
          alt={author}
          className="author-image"
        />
        <div className="author-info">
          <h4>{author}</h4>
          <p>
            <FontAwesomeIcon icon={faClock} /> {timeAgo}
          </p>
        </div>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
      <div className="card-footer">
        <button className="discuss-button">
          <FontAwesomeIcon icon={faComments} /> Discuss
        </button>
        <div className="meta-info">
          <span>
            <FontAwesomeIcon icon={faHeart} /> {likes} likes
          </span>
          <span>
            <FontAwesomeIcon icon={faHashtag} /> {reads ? `${reads} reads` : ""}
          </span>
          {trending && (
            <span className="trending">
              <FontAwesomeIcon icon={faFire} /> Trending
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const MyFeed = () => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkScrollPosition();
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="my-feed">
      <div className="feed-header">
        <h2>Explore Articles</h2>
        <div className="filter-buttons">
          <button>Following</button>
          <button>Featured</button>
        </div>
      </div>

      {/* Scrollable Articles Section */}
      <div className="scroll-wrapper sliding-scroll-wrapper">
        {showLeftButton && (
          <button
            className="scroll-button scroll-left sliding-scroll-button"
            onClick={scrollLeft}
            aria-label="Scroll Left"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        <div
          ref={scrollRef}
          className="scroll-container sliding-scroll-container"
          onScroll={checkScrollPosition}
        >
          {/* ArticleCard components */}
          <ArticleCard
            author="Chineta Adinnu"
            timeAgo="12 hours ago"
            title="State Management in React with Redux Toolkit: A Step-by-Step Guide"
            content="State management is crucial for creating dynamic and scalable user interfaces. As applications..."
            likes={17}
            reads={120}
            trending={true}
            image="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
          />

          <ArticleCard
            author="Naz Islam"
            timeAgo="17 hours ago"
            title="How to Share Data Between Components in Angular"
            content="Angular's data-sharing patterns provide developers with ways to pass data across components..."
            likes={14}
            reads={60}
            image="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
          />

          <ArticleCard
            author="Alex Johnson"
            timeAgo="1 day ago"
            title="Understanding the Virtual DOM in React"
            content="The Virtual DOM is a lightweight representation of the actual DOM that React manipulates..."
            likes={25}
            reads={230}
            image="https://images.pexels.com/photos/1231231/pexels-photo-1231231.jpeg"
          />

          <ArticleCard
            author="Maria Garcia"
            timeAgo="2 days ago"
            title="Mastering CSS Grid for Modern Web Design"
            content="CSS Grid provides a two-dimensional grid-based layout system that enhances responsive design..."
            likes={30}
            reads={300}
            trending={true}
            image="https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg"
          />

          <ArticleCard
            author="John Doe"
            timeAgo="3 days ago"
            title="Essential JavaScript ES6 Features You Should Know"
            content="ES6 introduced many new features to JavaScript such as arrow functions, template literals, and more..."
            likes={40}
            reads={350}
            image="https://images.pexels.com/photos/789123/pexels-photo-789123.jpeg"
          />

          <ArticleCard
            author="Jane Smith"
            timeAgo="4 days ago"
            title="Building Responsive Layouts with Flexbox"
            content="Flexbox allows for a flexible and responsive layout structure by aligning items in rows or columns..."
            likes={35}
            reads={320}
            image="https://images.pexels.com/photos/987654/pexels-photo-987654.jpeg"
          />

          <ArticleCard
            author="Emily Davis"
            timeAgo="5 days ago"
            title="An Introduction to TypeScript"
            content="TypeScript offers static type checking and additional features that make JavaScript development easier..."
            likes={50}
            reads={380}
            image="https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg"
          />

          <ArticleCard
            author="Michael Brown"
            timeAgo="6 days ago"
            title="Getting Started with Vue.js"
            content="Vue.js is a progressive JavaScript framework for building user interfaces that are incrementally adoptable..."
            likes={45}
            reads={310}
            image="https://images.pexels.com/photos/2345678/pexels-photo-2345678.jpeg"
          />

          {/* Add more ArticleCards as needed */}
        </div>
        {showRightButton && (
          <button
            className="scroll-button scroll-right sliding-scroll-button"
            onClick={scrollRight}
            aria-label="Scroll Right"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>

      {/* Widgets Section */}
      <Widget />
    </div>
  );
};

export default MyFeed;
