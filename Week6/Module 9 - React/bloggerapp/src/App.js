import React from "react";
import "./App.css";

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const books = [
    {
      id: 101,
      bname: "Master React",
      price: 670
    },
    {
      id: 102,
      bname: "Deep Dive into Angular 11",
      price: 800
    },
    {
      id: 103,
      bname: "Mongo Essentials",
      price: 450
    }
  ];

  return (
    <div className="container">
      <CourseDetails />

      <BookDetails books={books} />

      <BlogDetails />
    </div>
  );
}

export default App;