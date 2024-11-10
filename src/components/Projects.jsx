import React from "react";
import { motion } from "framer-motion";

const projects = [
  { name: "Ecom", description: "It is an e-commerce website using React and Tailwindcss", image: "/images/ecom.png", link: "https://zoroz-clfn.onrender.com/" , link2:"https://github.com/Skgup/Zoroz" },
  { name: "Multi-Step-Form", description: "It is an multistep form using react and tailwindcss", image: "/images/MSForm.png", link: "https://educationmultistepform.netlify.app" , link2:"https://github.com/Skgup/Multi-Step-Form" },
  { name: "Tic-Tac-Toe", description: "It is an tic-tac-toe game using HTML, CSS and JS", image: "/images/tictactoi.png", link: "https://skgup.github.io/tic-tak-toe/", link2:"https://github.com/Skgup/tic-tak-toe" },
  { name: "Portfolio", description: "It is an basic portfolio site with multiple page using HTML ,CSS and JS", image: "/images/portfolio.png", link: "https://skgup.github.io/Portfolio/", link2:"https://github.com/Skgup/Portfolio" },
  { name: "LDCS Organisation", description: "It is an organisation website build using HTML, CSS and JS in this website there is multiple pages.", image: "/images/organization.png", link: "https://skgup.github.io/lalita-devi/",link2:"https://github.com/Skgup/lalita-devi" },
  { name: "Save The Man Game", description: "It is an web game which is build by using HTML , CSS and JS ", image: "/images/game.png", link: "https://skgup.github.io/https-github.com-Skgup-saveTheMan.github.io/" , link2:"https://github.com/Skgup/https-github.com-Skgup-saveTheMan.github.io"},
];



const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-indigo-900 via-gray-800 to-gray-700 text-white">
      <h2 className="text-4xl font-semibold text-center text-teal-500 mb-12">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover" />
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-teal-400 hover:text-teal-600 transition duration-200">{project.name}</h3>
              <p className="text-gray-400 text-base">{project.description}</p>
              <div className="
              flex space-x-5">
              <a 
  href={project.link} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="inline-block text-teal-500 hover:text-teal-700 font-medium transition duration-300"
>
  View Details
</a>
<a href={project.link2} 
target="_blank"
rel="noopener noreferrer"
className="inline-block text-teal-500 hover:text-teal-700 font-medium transition duration-300"
>
Source code
</a>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
