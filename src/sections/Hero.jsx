import { Link } from "react-router";
import profileImg from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col md:flex-row items-center px-6 md:px-10 py-16 md:py-20 min-h-[80vh]"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-lg md:text-xl text-pink-500 font-semibold">
          Hello, I'm Ranvijay Singh
        </h1>
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Creative Visual Designer
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          I craft beautiful and functional digital experiences that leave
          lasting impressions.
        </p>
        <Link to="#about" className="inline-block">
          <button className="bg-pink-600 hover:bg-pink-700 transition duration-300 px-6 py-3 rounded-lg text-white shadow-lg">
            About Me
          </button>
        </Link>
      </div>

      {/* Right Content */}
      <div className="max-w-full md:w-1/2 flex justify-center">
        <img
          src={profileImg}
          alt="Profile"
          className="w-[220px] md:w-[320px] h-auto rounded-xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
