import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4 md:mb-0">✨ Featured Projects</h2>
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-teal-500 transition duration-300">
            View All
          </button>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <ProjectCard title="The Vintage" image={project1} />
          <ProjectCard title="Foodasa" image={project2} />
          <ProjectCard title="Marco Accent" image={project3} />
          <ProjectCard title="Mozaik" image={project4} />
        </div>
      </div>
    </section>
  );
}
