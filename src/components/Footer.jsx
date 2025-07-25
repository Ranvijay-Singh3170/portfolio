export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-gray-400 py-8">
      <div className="max-w-6xl mx-auto text-center">
        <ul className="flex flex-wrap justify-center gap-6 mb-6 text-sm sm:text-base">
          <li className="hover:text-white cursor-pointer transition duration-300">Home</li>
          <li className="hover:text-white cursor-pointer transition duration-300">About</li>
          <li className="hover:text-white cursor-pointer transition duration-300">Projects</li>
          <li className="hover:text-white cursor-pointer transition duration-300">Contact</li>
        </ul>
        <p className="text-sm sm:text-base text-gray-500">
          © {new Date().getFullYear()} Created by <span className="text-white font-semibold">Zamil</span>
        </p>
      </div>
    </footer>
  );
}
