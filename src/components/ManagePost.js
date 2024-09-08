import React, { useEffect, useState } from "react";
import axios from "axios";

const HelloWorld = () => {
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEdit = (post) => {
    setCurrentPost(post);
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5000/users/${currentPost.id}`,
        currentPost
      );
      setPosts(
        posts.map((post) => (post.id === currentPost.id ? currentPost : post))
      );
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="container mx-auto p-6 mt-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-md relative"
            style={{ marginTop: "100px" }} // Ensures margin at the top of each card
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="rounded-t-lg w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600">by {post.subtitle || "Nishant"}</p>
              <p className="text-sm text-gray-400">
                {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex justify-between mt-4 px-4">
              {" "}
              {/* Adjust button layout */}
              <button
                onClick={() => handleEdit(post)}
                className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Post</h2>
            <input
              type="text"
              value={currentPost.title}
              onChange={(e) =>
                setCurrentPost({ ...currentPost, title: e.target.value })
              }
              className="text-input mb-4 w-full"
            />
            <textarea
              value={currentPost.subtitle}
              onChange={(e) =>
                setCurrentPost({ ...currentPost, subtitle: e.target.value })
              }
              className="textarea-input mb-4 w-full"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white py-1 px-4 rounded mr-2 hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelloWorld;
