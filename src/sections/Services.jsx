import { FaLaptopCode, FaPenNib, FaLayerGroup } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      title: 'UI Design',
      description: 'Lorem ipsum is simply text of the printing type.',
      icon: <FaLaptopCode size={30} />,
      highlighted: false,
    },
    {
      title: 'Product Design',
      description: 'Lorem ipsum is simply text of the printing type.',
      icon: <FaPenNib size={30} />,
      highlighted: true,
    },
    {
      title: 'Branding',
      description: 'Lorem ipsum is simply text of the printing type.',
      icon: <FaLayerGroup size={30} />,
      highlighted: false,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#0f0f0f] via-[#141414] to-[#0f0f0f] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 ${
              service.highlighted
                ? 'bg-gradient-to-br from-pink-600 to-pink-800 text-white'
                : 'bg-[#1c1c1e] text-gray-300 hover:bg-[#2c2c2e]'
            }`}
          >
            <div className="mb-4 text-white">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm mb-4">{service.description}</p>
            <p className="text-sm text-white-400 font-medium cursor-pointer hover:underline">
              Know More →
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
