import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Book Website"
          main="This is a book website where users can buy and sell books created in React.js and still working on its backend..."
          image="/public/images/book.png"
        />
        <ProjectCard
          title="Mona Florals"
          main="This is a landing page for flowers created using HTML,CSS"
          image='/public/images/flowers.png'
        />
        <ProjectCard
          title="Snake Game"
          main="This is a snake game website where snake catches the food, created using HTML, CSS and JS"
          image='/public/images/snake.png'
        />
      </div>
    </div>
  );
};

export default Projects;