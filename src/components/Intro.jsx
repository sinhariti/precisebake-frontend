export default function Intro() {
    return (
      <div className="bg-[#f8f6ef] min-h-screen flex items-center justify-center p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-[#38495b] mb-9">
              Spread a little joy.
            </h2>
            <p className="text-lg text-[#38495b] leading-relaxed">
            Baking is both an art and a science. Small variations in ingredient measurements can significantly impact texture, flavor, and overall quality. By eliminating guesswork, Precision Baking empowers bakers with the accuracy they need to create flawless baked goods every time.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Achieve baking perfection with precise ingredient conversions!
            </p>
          </div>
  
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-[30%] overflow-hidden p-2">
              <img
                src="/13.png"
                alt="Croissant"
                className="w-full h-[500px] object-cover rounded-[30%]"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  