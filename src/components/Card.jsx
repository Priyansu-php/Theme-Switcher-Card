import React from "react";
import myImage from "../assets/ME.png";

export default function Card() {
    const skills = ['React', 'Node.js', 'MongoDB', 'MySQL', 'Tailwind']

    return (
    <div className="w-full max-w-sm bg-white/80 backdrop-blur-md border border-gray-700/40 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 dark:bg-gray-800/80">

        <img
          className="px-8 py-8 rounded-t-3xl rounded
hover:scale-105
transition-all
duration-300"
          src={myImage}
          alt="Priyansu-php"
        />

      <div className="px-5  pb-5">
        <a href="/">
        <h2 className="mt-0 text-2xl font-bold text-center text-gray-900 dark:text-white">
  Priyansu Baliarsingh
</h2>

<p className="text-center text-gray-600 dark:text-gray-300 mt-1">
  Full Stack Web Developer
</p>

<p className="text-center text-sm text-gray-500">
  IIIT Bhubaneswar
</p>
        </a>
        <div className="flex flex-wrap justify-center gap-2 mt-1">
        <div className="flex flex-wrap justify-center gap-2 mt-1">
    {skills.map((skill) => (
        <span
            key={skill}
            className="px-2 py-2 mb-5 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full"
        >
            {skill}
        </span>
    ))}
</div>
        </div>
        <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-gray-400">
  Let's Connect👾
</span>

          <div className="flex gap-3">
            <a
              href="https://github.com/Priyansu-php"
              target="_blank"
              className="bg-black text-white px-4 py-2 rounded-lg hover:scale-105
hover:shadow-lg"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/Priyansu-php"
              target="_blank"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:scale-105
hover:shadow-lg"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
