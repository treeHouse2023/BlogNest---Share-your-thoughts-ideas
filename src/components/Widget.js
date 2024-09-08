import React from "react";
import { FaThumbsUp, FaComment, FaEye } from "react-icons/fa";

export default function Widget() {
  const cards = [
    {
      imgSrc:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      name: "Pavel Romanov",
      date: "Aug 28, 2024",
      title:
        "Multithreading in Node.js: Using Atomics for Safe Shared Memory Operations",
      description:
        "Node.js developers got too comfortable with a single thread where JavaScript is executed. Even with the introduction of...",
      likes: 28,
      reads: 122,
      tag: "Node.js",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
      name: "Rajeev R. Sharma",
      date: "11 hours ago",
      title:
        "Create Your Own Cloudflare Workers AI LLM Playground Using NuxtHub and NuxtUI",
      description:
        "You might be wondering, 'Another LLM (Large Language Model) playground? Aren't there plenty of these already?'...",
      likes: 10,
      reads: 72,
      tag: "Workers AI",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      name: "Alicia Keys",
      date: "Sep 1, 2024",
      title: "Understanding React Hooks: A Comprehensive Guide",
      description:
        "React Hooks have revolutionized the way we write React components. This guide will help you understand how to use them effectively...",
      likes: 45,
      reads: 200,
      tag: "React",
    },
    {
      imgSrc:
        "https://imgs.search.brave.com/OVFEyrTrL31KQ489lnIJjOB3zcU_5gDtuEg8NKW8nBg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFjL0pob25fSmFp/cm9fVmVsJUMzJUEx/c3F1ZXoucG5n",
      name: "John Doe",
      date: "Sep 5, 2024",
      title: "CSS Grid vs Flexbox: Which One Should You Use?",
      description:
        "CSS Grid and Flexbox are two powerful layout systems in CSS. This article compares them and helps you decide which one to use for your projects...",
      likes: 30,
      reads: 150,
      tag: "CSS",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/789123/pexels-photo-789123.jpeg",
      name: "Jane Smith",
      date: "Sep 7, 2024",
      title: "Building Scalable Web Applications with Next.js",
      description:
        "Next.js is a powerful framework for building scalable web applications. Learn how to leverage its features to create high-performance apps...",
      likes: 50,
      reads: 220,
      tag: "Next.js",
    },
  ];

  return (
    <div className="space-y-4 mt-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-4">
            <img
              src={card.imgSrc}
              alt={card.name}
              className="rounded-full w-10 h-10 mr-4"
            />
            <div>
              <h3 className="font-semibold">
                {card.name} <span className="text-sm text-gray-400">Pro</span>
              </h3>
              <p className="text-xs text-gray-500">{card.date}</p>
            </div>
          </div>
          <h2 className="text-lg font-bold mt-2">{card.title}</h2>
          <p className="text-gray-500">{card.description}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm flex items-center">
              <FaComment className="mr-1" /> Discuss •{" "}
              <FaThumbsUp className="mx-1" /> {card.likes} likes •{" "}
              <FaEye className="mx-1" /> {card.reads} reads
            </span>
            <span className="bg-blue-500 text-white rounded-full px-2 text-xs">
              {card.tag}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
