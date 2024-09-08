import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg text-gray-800">
      <div className="flex justify-center space-x-8 py-6 border-b border-gray-300">
        <a
          href="https://x.com/nishant852800"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter"
          className="hover:text-blue-400"
        >
          <FontAwesomeIcon icon={faTwitter} className="h-8 w-8" />
        </a>
        <a
          href="https://www.instagram.com/nishant.chauhan20/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram"
          className="hover:text-pink-500"
        >
          <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
        </a>
        <a
          href=""
          target="_self"
          rel="noopener noreferrer"
          aria-label="home"
          className="hover:text-blue-600"
        >
          <FontAwesomeIcon icon={faHouse} className="h-8 w-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/nishant-chauhan-870239234/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin"
          className="hover:text-blue-700"
        >
          <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
        </a>
        <a
          href="https://github.com/treeHouse2023"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github"
          className="hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
        </a>
      </div>
      <div className="text-center py-4 bg-gray-100">
        <span className="text-gray-500">
          © <span id="year">{new Date().getFullYear()}</span> Nishant Chauhan.
          All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
