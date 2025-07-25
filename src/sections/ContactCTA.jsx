export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-black via-[#111] to-black text-white py-20 text-center px-6 sm:px-10 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          Let’s work together on your next project
        </h2>
        <p className="text-gray-400 mt-6 text-base sm:text-lg">
          I'm always excited to collaborate and bring great ideas to life. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>
        <button className="mt-8 bg-primary hover:bg-opacity-80 transition duration-300 px-8 py-3 text-white text-lg rounded-full shadow-lg">
          Contact
        </button>
      </div>
    </section>
  );
}
