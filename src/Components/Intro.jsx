import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  const isMobile = window.innerWidth < 768;

  return (
    <section className="pt-30 px-6 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
        {/* Text on the left */}
        <div className="text-left">
          <p className="text-2xl md:text-3xl text-black font-semibold mb-2">
            Software Developer
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-400 mb-4">
            Hi, I'm{" "}
            {isMobile ? (
              <span className="text-blue-600">Pranjal Tamta</span>
            ) : (
              <TypeAnimation
                sequence={["Pranjal Tamta", 2000, ""]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-600"
              />
            )}
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mt-2">
            from IIT ROPAR
          </h2>
        </div>

        {/* Image on the right */}
        <div className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl mt-6 md:mt-0">
          <img
            src="/Profile-3.png"
            alt="Pranjal Tamta"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
