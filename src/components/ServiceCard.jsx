export default function ProjectCard({ title, image }) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-primary text-sm mt-2 cursor-pointer">Know More →</p>
      </div>
    </div>
  );
}
