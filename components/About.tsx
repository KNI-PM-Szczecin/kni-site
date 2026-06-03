const STATS = [
  { value: "40+", label: "Aktywnych członków" },
  { value: "12", label: "Projektów w toku" },
  { value: "5 lat", label: "Działalności" },
  { value: "3", label: "Nagrody na hackathonach" },
];

export default function About() {
  return (
    <section id="o-kole" className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
          O nas
        </p>

        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-gray-900 max-w-lg mb-5 leading-tight"
          
        >
          Pasja do informatyki, kultura współpracy.
        </h2>

        {/* Description */}
        <p className="text-gray-500 max-w-xl mb-14 leading-relaxed">
          KNI to miejsce na Politechnice Morskiej w Szczecinie, gdzie teoria
          spotyka praktykę. Organizujemy warsztaty, hackathony i projekty
          badawcze, które przygotowują studentów do wyzwań nowoczesnej branży
          IT.
        </p>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <div
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1.5"
                
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
