import { useState } from "react";
import { toast } from "sonner";
import ClipLoader from "react-spinners/ClipLoader";
export default function Converter() {
  //state to hold the input value
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleConvert = async () => {
    try {
      // console.log("Convert button clicked with query:", query);
      setLoading(true);
      setError(null);

      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'; // Provide a default value
      const apiUrl = `${apiBaseUrl}/api/convert`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      if (!response.ok) {
        // toast("Please enter text", { type: "error" });
        throw new Error(data.message || 'Conversion failed');
      }
      let resultText = data.result;

      // Clean up the response if it contains backticks
      if (resultText.includes('```')) {
        // Extract content between backticks
        resultText = resultText.replace(/```json\n|\n```/g, '');
      }
      // console.log("Cleaned result:", resultText);
      setResult(JSON.parse(resultText));

    } catch (err) {
      setResult(null);
      toast("Invalid input or conversion failed. Please try again.", { type: "error" });
      console.error('Error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div id="converter" className="bg-[#f8f6ef] min-h-screen flex items-center justify-center p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Images Section */}
        <div className="flex flex-col items-start gap-6">
          <img
            src="/11.png"
            alt="Grilled Chicken"
            className="w-80 h-80 object-cover rounded-lg shadow-lg relative -left-28"
          />
          <img
            src="/12.png"
            alt="Bread Loaf"
            className="w-80 h-80 object-cover rounded-lg shadow-lg ml-56 relative -top-28"
          />
        </div>

        {/* Converter Section */}
        <div>
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-extrabold text-[#38495b]">CONVERTER :</h2>
            <input
              type="text"
              placeholder="Eg. 1 cup of flour"
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-4 rounded-2xl bg-[#CBC5BC] text-white text-lg outline-none"
            />
            <div className="flex justify-end">
              <button
                
                // onClick={() => {
                //   // Handle conversion logic here
                //   console.log("Convert button clicked with query:", Query);
                // }}
                onClick={handleConvert}
                disabled={loading}
                className="w-32 px-5 py-2.5 bg-black text-white rounded-lg font-semibold shadow-md hover:bg-gray-800 cursor-pointer transition-all">
                {loading ? 'Converting...' : 'Convert'}
              </button>
              {loading && (
                <div className="fixed inset-0 flex justify-center items-center bg-transparent">
                  <ClipLoader color="#A89F96" loading={loading} size={100} />
                </div>
              )}
            </div>
            {/* {error && (
              <div className="z-50 mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
              Invalid input or conversion failed. Please try again.
              </div>
            )} */}
            {result && (
              <div className="z-50 mt-4 p-3 bg-white rounded-lg shadow-md">
                <p className="font-bold text-xl">{result.weight}</p>
                {result.assumption && (
                  <p className="text-gray-600 mt-2">Assumption: {result.assumption}</p>
                )}
                <p className="font-mono mt-2 text-sm">Calculation: {result.calculation}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
