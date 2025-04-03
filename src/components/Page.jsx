export default function Page() {
    return (
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <div
          className=" relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/6.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Brand Name */}
          <div className="mb-10">
            <h2 className="text-lg md:text-2xl font-semibold tracking-wider">BAKEPRECISE AI</h2>
          </div>
  
          {/* Main Heading */}
          <div className="text-center space-y-2 max-w-4xl mx-auto mt-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight">
              COOKING IS ART
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight">
              BUT BAKING IS SCIENCE
            </h1>
          </div>
  
          {/* CTA Button */}
          <div className="mt-8">
            <button
              onClick={() => {
                document.getElementById('converter').scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
             className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-4 rounded-sm shadow-lg font-semibold">
              Try Now!
            </button>
          </div>
        </div>
      </div>
    );
  }
  