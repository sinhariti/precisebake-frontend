import { useState, useRef, useCallback } from "react";
import Modal from "react-modal";
import { toast } from "sonner";
import ClipLoader from "react-spinners/ClipLoader";

// Ensure accessibility for screen readers
Modal.setAppElement("#root");

export default function Generate() {
  const [prompt, setPrompt] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recipeHTML, setRecipeHTML] = useState("");
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const modalContentRef = useRef(null);

  // Function to generate the recipe
  const onGenerate = useCallback(async () => {
    if (!prompt.trim()) {
      toast("Please enter some text", { type: "error" });
      return;
    }

    try {
      setLoading(true);
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
      const apiUrl = `${apiBaseUrl}/api/recipe`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ FINAL_PROMPT: prompt }), // Correct request body
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to generate recipe");
      }

      if (data.recipe) {
        let cleanedHTML = data.recipe.replace(/```html|```/g, "").trim();
        setRecipeHTML(cleanedHTML);
        setIsOpen(true);
        toast("Recipe generated successfully!", { type: "success" });
      } else {
        throw new Error("Empty response received.");
      }
    } catch (e) {
      toast("Error generating recipe. Please try again.", { type: "error" });
      console.error("Error:", e);
    } finally {
      setLoading(false);
    }
  }, [prompt]);

  // Scroll Button Logic
  const handleScroll = () => {
    if (modalContentRef.current) {
      setShowScrollBtn(modalContentRef.current.scrollTop > 200);
    }
  };

  const scrollToTop = () => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#f8f6ef] min-h-screen flex items-center justify-center p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        <div className="relative">
          <div className="overflow-hidden rounded-tl-[50%] rounded-tr-[50%]">
            <img
              src="/10.png"
              alt="Croissant"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-extrabold text-[#38495b]">
            Generate Recipes!
          </h2>
          <textarea
            placeholder="Type here"
            value={prompt} // Controlled input
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full h-36 p-4 rounded-3xl bg-[#CBC5BC] text-white text-lg outline-none"
          />
          <div className="flex justify-end">
            <button
              onClick={onGenerate}
              disabled={loading}
              className="w-32 px-5 py-2.5 bg-black text-white rounded-lg font-semibold shadow-md hover:bg-gray-800 transition-all cursor-pointer"
            >
              {loading ? "Generating..." : "Generate!"}
            </button>
          </div>
        </div>
      </div>

      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-transparent">
          <ClipLoader color="#A89F96" loading={loading} size={100} />
        </div>
      )}

      {/* Modal for Recipe Display */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Generated Recipe"
        className="bg-[#f8f6ef] p-6 rounded-xl shadow-lg max-w-3xl mx-auto mt-20 outline-none relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Here's Your Recipe!</h2>

        <div
          ref={modalContentRef}
          className="max-h-[400px] overflow-y-auto p-4 border rounded-lg bg-gray-50 text-gray-700"
          onScroll={handleScroll}
        >
          <div dangerouslySetInnerHTML={{ __html: recipeHTML }} />
        </div>

        {showScrollBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 bg-[#f8f6ef] text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition-all"
          >
            ⬆ Scroll to Top
          </button>
        )}

        <div className="flex justify-end mt-4">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
