import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Work() {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-4 text-left py-10">
      <h2 className="text-4xl font-extrabold text-white mb-10">My Work</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Mobile clickable card */}
        <a
          href="https://github.com/PranjalTamta/Restaurant-Food-Ordering-API-"
          target="_blank"
          rel="noopener noreferrer"
          className="block md:hidden"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <h3 className="text-white font-semibold text-lg mb-2">
              Restaurant Food Ordering API
            </h3>
            <img
              src="/work-1.png"
              alt="Restaurant Food Ordering API"
              className="w-full h-full object-cover"
            />
          </div>
        </a>

        {/* Desktop hover card */}
        <div className="hidden md:block relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src="/work-1.png"
            alt="Bookstore App"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-400 bg-opacity-70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-500">
            <h3 className="text-xl font-bold text-white mb-2">
              Restaurant Food Ordering API
            </h3>
            <p className="text-sm text-gray-300 mb-4 px-2">
              Developed a restaurant app backend with MVC, JWT auth, role-based
              access, CRUD, and tested RESTful APIs.
            </p>
            <a
              href="https://github.com/PranjalTamta/Restaurant-Food-Ordering-API-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 text-xl hover:text-white transition"
            >
              <FaArrowUpRightFromSquare />
            </a>
          </div>
        </div>

        {/* Project 2 - Real-Time News Dashboard */}
        <a
          href="https://github.com/PranjalTamta/-Real-Time-News-"
          target="_blank"
          rel="noopener noreferrer"
          className="block md:hidden"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <h3 className="text-white font-semibold text-lg mb-2">
              Real-Time News Dashboard
            </h3>
            <img
              src="/work-2.png"
              alt="Weather App"
              className="w-full h-full object-cover"
            />
          </div>
        </a>

        <div className="hidden md:block relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src="/work-2.png"
            alt="Weather App"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-400 bg-opacity-70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-500">
            <h3 className="text-xl font-bold text-white mb-2">
              Real-Time News Dashboard
            </h3>
            <p className="text-sm text-gray-300 mb-4 px-2">
              Built a React.js news dashboard with News API integration,
              category filters, React Router, responsive UI, and Hooks for
              real-time updates.
            </p>
            <a
              href="https://github.com/PranjalTamta/-Real-Time-News-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 text-xl hover:text-white transition"
            >
              <FaArrowUpRightFromSquare />
            </a>
          </div>
        </div>

        {/* Project 3 - Voice-Controlled Browser Assistant */}
        <a
          href="https://github.com/PranjalTamta/voice-assistant"
          target="_blank"
          rel="noopener noreferrer"
          className="block md:hidden"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <h3 className="text-white font-semibold text-lg mb-2">
              Voice-Controlled Browser Assistant
            </h3>
            <img
              src="/work-3.png"
              alt="Todolist App"
              className="w-full h-full object-cover"
            />
          </div>
        </a>

        <div className="hidden md:block relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src="/work-3.png"
            alt="Todolist App"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-400 bg-opacity-70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-500">
            <h3 className="text-xl font-bold text-white mb-2">
              Voice-Controlled Browser Assistant
            </h3>
            <p className="text-sm text-gray-300 mb-4 px-2">
              Developed a React-based voice assistant using Speech Recognition
              API for hands-free browsing with voice commands and an intuitive
              UI.
            </p>
            <a
              href="https://github.com/PranjalTamta/voice-assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 text-xl hover:text-white transition"
            >
              <FaArrowUpRightFromSquare />
            </a>
          </div>
        </div>
      </div>

      {/* Non-clickable see more text */}
      <div className="text-center mt-8">
        <span className="text-blue-600 text-sm font-semibold">See more</span>
      </div>
    </section>
  );
}
