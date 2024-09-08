import React, { useEffect, useRef } from "react";
import Header from "./Header";
import "./HeroSection.css";
import bgvideo from "../assets/bgvideo.mp4";
import MyFeed from "./MyFeed";

const HeroSection = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const myFeedRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    video.play();

    const renderVideoOnCanvas = () => {
      if (canvas && context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        requestAnimationFrame(renderVideoOnCanvas);
      }
    };

    video.addEventListener("play", renderVideoOnCanvas);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleScroll = () => {
      const heroSectionBottom = canvas.getBoundingClientRect().bottom;
      const scrollPosition = window.scrollY + window.innerHeight;

      console.log("Scroll Position:", scrollPosition);
      console.log("Hero Section Bottom:", heroSectionBottom);

      if (scrollPosition > heroSectionBottom) {
        if (myFeedRef.current) {
          myFeedRef.current.style.opacity = 1;
          myFeedRef.current.style.transform = "translateY(0)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      video.removeEventListener("play", renderVideoOnCanvas);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-wrapper">
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        ></canvas>
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src={bgvideo}
          muted
          loop
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="p-8 text-white">
            <h1 className="text-4xl md:text-6xl mb-4">Welcome to Blognest</h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl">
              Share your thoughts, ideas, and stories with the world. Our
              platform provides a space for you to connect with like minded
              individuals, build your audience, and make your voice heard.
              Explore the limitless possibilities of blogging with our
              easy-to-use tools and vibrant community.
            </p>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </section>
      <section
        id="myFeedSection"
        ref={myFeedRef}
        className="opacity-0 transform -translate-y-10 transition-opacity transition-transform duration-700"
        style={{ minHeight: "100vh", padding: "50px 0" }}
      >
        <MyFeed />
      </section>
    </div>
  );
};

export default HeroSection;
