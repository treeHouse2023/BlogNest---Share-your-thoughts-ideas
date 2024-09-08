import React, { useEffect, useState } from "react";
import Creator from "../assets/Creator.jpg";
import {
  FaTachometerAlt,
  FaMoneyBillWave,
  FaEye,
  FaCalendarAlt,
  FaBook,
  FaPen,
  FaComments,
  FaCogs,
  FaBlog,
  FaCheckCircle,
} from "react-icons/fa";
import "./UserProfile.css";

const UserProfile = () => {
  const [blogs, setBlogs] = useState([]);
  const [uploadedBlogsCount, setUploadedBlogsCount] = useState(0);
  const [savedItemsCount, setSavedItemsCount] = useState(0);
  const [bookmarksCount, setBookmarksCount] = useState(0);
  const [selectedBlog, setSelectedBlog] = useState(null); // State to manage selected blog

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setUploadedBlogsCount(data.length);
        setSavedItemsCount(5); // Replace with actual logic
        setBookmarksCount(3); // Replace with actual logic
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const handleCardClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBackClick = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="user-profile-container">
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <ul>
            {[
              { icon: <FaTachometerAlt />, label: "Dashboard" },
              { icon: <FaMoneyBillWave />, label: "Payments" },
              { icon: <FaEye />, label: "Blog View" },
              { icon: <FaCalendarAlt />, label: "Monthly View" },
              { icon: <FaBook />, label: "Bookings" },
              { icon: <FaPen />, label: "Posts" },
              { icon: <FaComments />, label: "Comments" },
              { icon: <FaCogs />, label: "Settings" },
              { icon: <FaBlog />, label: "Blog Details" },
            ].map((item, index) => (
              <li className="nav-itemss" key={index}>
                {item.icon} {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        {selectedBlog ? (
          // Full Blog View
          <div className="full-blog-view">
            <button className="back-button" onClick={handleBackClick}>
              Back to Blogs
            </button>
            <h2 className="blog-title">{selectedBlog.title}</h2>
            <p className="blog-date">
              Posted on: {formatDate(selectedBlog.date)}
            </p>
            <img
              src={selectedBlog.image}
              alt="Blog"
              className="full-blog-image"
            />
            <p className="blog-content">{selectedBlog.content}</p>
          </div>
        ) : (
          // Grid View
          <>
            <header className="content-header">
              <div className="profile-info">
                <div className="profile-picture">
                  <img src={Creator} alt="Profile" />
                </div>
                <div className="profile-details">
                  <h3 className="user-name">Nishant Chauhan </h3>
                  <div className="status">
                    <FaCheckCircle className="status-icon" />
                    <span>Logged In</span>
                  </div>
                </div>
              </div>

              <div className="user-stats">
                <div className="stat">
                  <span className="stat-number">{uploadedBlogsCount}</span>
                  <span>Uploaded Blogs</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{savedItemsCount}</span>
                  <span>Saved Items</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{bookmarksCount}</span>
                  <span>Bookmarks</span>
                </div>
              </div>
            </header>

            <section className="blog-info">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.length > 0 ? (
                  blogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="blog-card card-margin relative"
                      onClick={() => handleCardClick(blog)}
                    >
                      {/* Image Section */}
                      <img
                        src={blog.image}
                        alt="Blog"
                        className="blog-image h-40 w-full object-cover rounded-t-lg"
                        style={{ height: "200px", width: "100%" }} // Fixed height and full width
                      />
                      {/* Blog Title and Content */}
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">
                          {blog.title || "Card title"}
                        </h3>
                        <p className="text-gray-600">
                          {blog.content || "No content available"}
                        </p>
                        {/* Blog Date */}
                        <p className="text-sm text-gray-400">
                          Posted on: {formatDate(blog.date) || "Unknown date"}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="blogline">No blogs available.</p>
                )}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default UserProfile;
