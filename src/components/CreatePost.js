import React, { useState } from "react";
import axios from "axios";
import "./CreatePost.css"; // Import the CSS file

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(false);

  // Handle image upload
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Handle preview toggle
  const handlePreview = () => {
    setPreview(!preview);
  };

  // Handle publish to the server
  const handlePublish = async () => {
    const postData = { title, subtitle, content, image };

    try {
      await axios.post("http://localhost:5000/users", postData);
      alert("Post published successfully!");
      setTitle("");
      setSubtitle("");
      setContent("");
      setImage(null);
      setPreview(false);
    } catch (error) {
      console.error("Error publishing post:", error);
      alert("Failed to publish the post. Please try again.");
    }
  };

  return (
    <div className="create-post-container">
      <div className={`create-post ${preview ? "preview-mode" : ""}`}>
        {!preview ? (
          <>
            <div className="file-input-container">
              <label htmlFor="file-input" className="file-input-label">
                <i className="fas fa-upload"></i> Add Image Cover
              </label>
              <input
                type="file"
                accept="image/*"
                id="file-input"
                onChange={handleImageChange}
                className="file-input"
              />
            </div>
            {image && (
              <div className="image-preview-container">
                <img src={image} alt="Blog Preview" className="image-preview" />
                <button className="remove-image" onClick={() => setImage(null)}>
                  X
                </button>
              </div>
            )}
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-input"
            />
            <textarea
              placeholder="Write your article here..."
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                e.target.style.height = "auto"; // Reset the height to auto
                e.target.style.height = `${e.target.scrollHeight}px`; // Adjust the height dynamically
              }}
              className="textarea-input create-post-textarea"
            />

            <input
              type="text"
              placeholder="Enter Your Name "
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="text-input"
            />
            <div className="button-group">
              <button onClick={handlePreview} className="button">
                Preview
              </button>
            </div>
          </>
        ) : (
          <div className="preview-container">
            {image && <img src={image} alt="Blog" className="image-preview" />}
            <div className="text-center">
              <h2>{title}</h2>
              <h4>by - {subtitle}</h4>
              <p className="content-preview">{content}</p>
            </div>
            <div className="button-group">
              <button onClick={handlePreview} className="button edit-button">
                Edit
              </button>
              <button onClick={handlePublish} className="button publish-button">
                Publish
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePost;
