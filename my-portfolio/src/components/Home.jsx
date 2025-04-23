import React from "react";
import TextChange from "/src/components/TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-md md:text-lg leading-relaxed max-w-2xl mt-6">
        I'm a developer with experience in both frontend and backend development. I've worked on various projects, building user-friendly and efficient applications. I'm always eager to learn new technologies and improve my skills. I also know Data Structures and Algorithms using C++, and I enjoy solving challenges on platforms like LeetCode, GeeksforGeeks and HackerRank to sharpen my problem-solving abilities.
</p>


        
      </div>
      <div>
        <img className="" src="/images/home-img-removebg-preview.png" alt="" />
      </div>
    </div>
  );
};

export default Home;