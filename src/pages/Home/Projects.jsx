import React from "react";
import { useNavigate } from "react-router";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    title: "LostFinder",
    image: "https://i.ibb.co.com/xz1D4GF/Screenshot-2025-01-05-023258.png",
    description: "A platform to connect people for lost and found items...",
    technologies: ["React", "Tailwind CSS", "SwiperJS", "MongoDB"],
    github: "https://github.com/SK-Jabed/LostFinder-Project-Client",
    live: "https://b10-assignment-11-753d2.web.app/",
  },
  {
    id: 2,
    title: "Warmth & Care",
    image: "https://i.ibb.co.com/SQGgf96/Screenshot-2025-01-05-022651.png",
    description: "A platform to donate winter clothes to needy people...",
    technologies: ["React", "SwiperJS", "Tailwind CSS"],
    github: "https://github.com/SK-Jabed/Warmth-and-Care-Project",
    live: "https://b10-assignment-09.web.app/",
  },
  {
    id: 3,
    title: "FundSphere",
    image: "https://i.ibb.co.com/W4p89fm4/Screenshot-2025-02-07-155724.png",
    description:
      "FundSphere is a modern platform designed for entrepreneurs...",
    technologies: ["React", "Tailwind CSS", "Firebase", "MongoDB"],
    github: "https://github.com/SK-Jabed/FundSphere-Project-Client",
    live: "https://b10-assignment-10-6b3b9.web.app/",
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#120820] via-black to-[#120820] text-white"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text animate-fade-in-down font-alegreya">
            My Best Projects
          </h2>
          <p className="mt-4 text-gray-300 text-lg font-nunito">
            Explore my top projects and the challenges I overcame to complete
            them.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 bg-opacity-75 backdrop-blur-lg shadow-lg rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[220px] rounded-lg shadow-lg"
              />
              <h3 className="text-2xl font-semibold mt-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-700 text-gray-200 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                >
                  View Details
                </button>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-lg transition-all duration-300"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
