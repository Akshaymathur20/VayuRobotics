import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const stats = [
    { label: "Kilometers Covered", end: 150000 },
    { label: "Flying Hours", end: 12000 },
    { label: "Projects Completed", end: 500 }
  ];

  return (
    <section className="py-20 bg-white text-center px-4 sm:px-6 lg:px-8" ref={ref}>
      {/* Section Heading */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
          Our <span className="text-yellow-600">Achievements</span>
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-100 px-8 py-12 rounded-xl shadow-md transition hover:shadow-lg"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-yellow-600">
              {inView && <CountUp end={stat.end} duration={2.5} separator="," />}+
            </h3>
            <p className="mt-3 text-base sm:text-lg text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
