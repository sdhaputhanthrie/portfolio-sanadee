import { EXPERIENCES } from "../constants";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Projects</h2>
        <div>
        {EXPERIENCES.map((experience,index) => (
          <div key={index}className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">
              {experience.title} 

            </h6>
            <p className="mb-4 text-neutral-400">{experience.description}</p>

             <a
                href={experience.githublink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 underline hover:text-blue-600"
              >
              <FaGithub /> View on GitHub
            </a>

            </div>
             
            
            </div>
          
        ))}
        </div>
    </div>
  );
};

export default Projects