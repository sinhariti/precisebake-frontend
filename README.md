Bake Precise AI - Frontend 
================================
![1_0CRBlRwShGYOgpNqPUsI_w](https://github.com/user-attachments/assets/75fe64fa-d73b-402b-86f6-864f3b2d33f7)
## Website Link : https://precisebake.vercel.app/
## Problem Statement: Precision Baking - AI for Accurate Ingredient Measurement in Grams

Online recipe platforms often list ingredients in vague measurements like "cups" or "spoons," which can lead to inconsistent results, especially in professional baking. This lack of precision frustrates bakers and affects the quality of their baked goods.

Objective
---------
Participants are tasked with developing AI-powered tools that convert recipe measurements into precise grams. Solutions should include:

- A database of ingredient densities
- Real-time conversion algorithms
- User-friendly interfaces

Ensuring accurate and consistent results for all bakers.

---

Project Overview
----------------
PreciseBake is an AI-powered solution that leverages Google Gemini API to accurately convert volume-based ingredient measurements into precise weight values in grams or kilograms. The project integrates an ingredient list with density values, allowing seamless and accurate conversions.

Features
--------
- **Google Gemini API Integration:** Used for intelligent conversions of ingredient measurements.
- **Ingredient List:** A predefined dataset containing ingredient densities, ensuring correct conversions.
- **Backend Functionality:** The backend is responsible for processing conversions via the Gemini API.
- **Recipe Generator:** The `Generate` component calls the Gemini API to provide detailed recipes.
- **React.js Frontend:** Built as a single-page application (SPA) for seamless user experience.

Technologies Used
-----------------
- **Frontend:** React.js (Single Page Application)
- **Backend:** Node.js with Express.js
- **API Integration:** Google Gemini API
- **Styling:** Tailwind CSS, Post CSS
- **Package Manager:** npm

Installation & Setup
--------------------
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/precisebake.git
   cd precisebake
   ```
2. Install dependencies:
   ```sh
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. Add your Google Gemini API key in `.env`:
   ```sh
   VITE_GOOGLE_GEMINI_API_KEY=your_api_key_here
   ```
4. Run the backend:
   ```sh
   cd backend && npm start
   ```
5. Run the frontend:
   ```sh
   cd frontend && npm run dev
   ```

Usage
-----
- Enter an ingredient measurement (e.g., `1 cup of butter`).
- The system will use AI to return the precise weight in grams or kilograms.
- Use the recipe generator to get AI-powered recipes with exact ingredient weights.

Future Enhancements
-------------------
- Improve ingredient database with more entries and densities.
- Enhance UI with interactive elements.
- Adding shopping list related to the recipe generated.

Contributors
------------
Yadubir Jha, Riti Sinha, Asmita Agarwal, Anshuman Singh


License
-------
This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to contribute, suggest improvements, or report issues! 🚀

