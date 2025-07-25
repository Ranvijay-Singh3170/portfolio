import CountUp from "react-countup";

export default function Experience() {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-20 px-6 sm:px-10 md:px-20 overflow-hidden"
    >
      {/* Gradient Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900 via-black to-teal-900 opacity-60 blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Box */}
        <div className="text-center md:text-left">
          <h1 className="text-8xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-xl">
            <CountUp end={12} duration={2} />
          </h1>
          <p className="text-2xl mt-4 tracking-wide text-gray-300 font-light">
            Years of Professional Experience
          </p>
        </div>

        {/* Right Box - Stats */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { value: 60, suffix: "+", label: "Clients" },
            { value: 12, label: "Years Experience" },
            { value: 122, suffix: "+", label: "Completed Projects" },
            { value: 10, label: "Achievements" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1f1f1f] to-[#2e2e2e] p-6 rounded-2xl border border-white/10 shadow-2xl text-center transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-4xl font-bold text-teal-400 drop-shadow-sm">
                <CountUp
                  end={item.value}
                  duration={2}
                  suffix={item.suffix || ""}
                />
              </h3>
              <p className="text-sm text-gray-400 mt-2 uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
