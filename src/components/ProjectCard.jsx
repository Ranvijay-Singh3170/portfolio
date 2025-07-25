export default function ProjectCard({ title, image }) {
  return (
    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition duration-300 hover:opacity-90"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
}
