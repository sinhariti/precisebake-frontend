export default function Features() {
    return (
      <section className="bg-[#f8f6ef] min-h-screen flex flex-col items-center justify-center px-6 py-16">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-red mb-10">
          Features
        </h2>
  
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {/* Feature 1 */}
          <div className="relative rounded-[50px] overflow-hidden shadow-lg">
            <img
              src="/7.png"
              alt="Precise Conversions"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-6 text-center">
              <h3 className="text-2xl font-semibold">PRECISE CONVERSIONS</h3>
              <p className="mt-2 text-lg">
                Convert ingredients quantities with precision.
              </p>
            </div>
          </div>
  
          {/* Feature 2 */}
          <div className="relative rounded-[50px] overflow-hidden shadow-lg">
            <img
              src="/8.png"
              alt="Generate Recipes"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-6 text-center">
              <h3 className="text-2xl font-semibold">GENERATE RECIPES</h3>
              <p className="mt-2 text-lg">
                Get delicious baking recipes for various desserts or dishes!
              </p>
            </div>
          </div>
  
          {/* Feature 3 */}
          <div className="relative rounded-[50px] overflow-hidden shadow-lg">
            <img
              src="/9.png"
              alt="Breads"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-6 text-center">
              <h3 className="text-2xl font-semibold">Multilingual</h3>
              <p className="mt-2 text-lg">
              Supports multiple languages for global accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  