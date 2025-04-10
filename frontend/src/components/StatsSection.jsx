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
    <section className="py-20 bg-white text-center" ref={ref}>
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-4xl font-bold text-yellow-600">
              {inView && <CountUp end={stat.end} duration={2.5} separator="," />}+
            </h3>
            <p className="mt-2 text-lg text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
