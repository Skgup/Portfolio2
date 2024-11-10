import React from "react";

const SocialSidebar = () => {
  return (
    <div className="fixed left-0 top-1/3 space-y-4 p-2">
      <a href="https://github.com/Skgup" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-600 rounded-full hover:bg-blue-700">
        <i className="fab fa-github text-white text-xl"></i>
      </a>
      <a href="https://www.linkedin.com/in/sumit-gupta-1b529b206/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-600 rounded-full hover:bg-blue-700">
        <i className="fab fa-linkedin text-white text-xl"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-600 rounded-full hover:bg-blue-700">
        <i className="fab fa-twitter text-white text-xl"></i>
      </a>
    </div>
  );
};

export default SocialSidebar;
