export default function StatsSection() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#7fb3a0] via-[#6da592] to-[#5a9179] relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3">
            Trusted by Chennai Families
          </h2>
          <p className="text-white/80 text-base md:text-lg">
            Numbers that speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Stat 1 */}
          <div className="text-center group">
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl mb-2 md:mb-3">⭐</div>
              <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#7fb3a0] to-[#5a9179] bg-clip-text text-transparent mb-1 md:mb-2">
                5.0
              </div>
              <div className="text-gray-600 font-semibold mb-1 text-xs md:text-base">
                Perfect Rating
              </div>
              <div className="flex justify-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xs md:text-sm">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-center group">
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl mb-2 md:mb-3">✨</div>
              <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#7fb3a0] to-[#5a9179] bg-clip-text text-transparent mb-1 md:mb-2">
                185+
              </div>
              <div className="text-gray-600 font-semibold mb-1 text-xs md:text-base">
                Happy Reviews
              </div>
              <div className="text-[10px] md:text-xs text-gray-500">
                Google Verified
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-center group">
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl mb-2 md:mb-3">🏆</div>
              <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#7fb3a0] to-[#5a9179] bg-clip-text text-transparent mb-1 md:mb-2">
                10+
              </div>
              <div className="text-gray-600 font-semibold mb-1 text-xs md:text-base">
                Years Experience
              </div>
              <div className="text-[10px] md:text-xs text-gray-500">
                Expert Care
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="text-center group">
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl mb-2 md:mb-3">❤️</div>
              <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#7fb3a0] to-[#5a9179] bg-clip-text text-transparent mb-1 md:mb-2">
                100%
              </div>
              <div className="text-gray-600 font-semibold mb-1 text-xs md:text-base">
                Satisfaction
              </div>
              <div className="text-[10px] md:text-xs text-gray-500">
                Guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
