# AI Trip Planner

AI Trip Planner is a full-stack application that generates personalized trip itineraries using Gemini AI. Users can specify their travel preferences, and the AI provides recommendations for destinations, hotels, and activities.

## Features

- **Google OAuth Authentication:** Secure login using Google accounts.
- **Trip Customization:** Choose trip location, duration, budget, and number of travelers.
- **AI-Generated Itineraries:** Get hotel recommendations, day-wise plans, and places to visit using Gemini AI.
- **Location Links:** Each recommended place comes with a Google Maps link for easy navigation.
- **Real-Time Data:** Integrated with Firebase Firestore for efficient data storage and management.
- **Modern UI:** Styled with TailwindCSS and shadcn/ui for a responsive and user-friendly interface.

## Tech Stack

- **Frontend:** React, TailwindCSS, shadcn/ui
- **Backend:** Firebase Firestore
- **AI Integration:** Gemini AI
- **Authentication:** Google OAuth

## Getting Started

### Prerequisites

- Node.js
- Firebase account
- Google Cloud account (for Google OAuth and Gemini AI)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/ai-trip-planner.git
    cd ai-trip-planner
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add your Google API key, Firebase config, and other necessary environment variables. For example:
    ```
    VITE_GOOGLE_PLACE_API_KEY=your_google_api_key
    VITE_GOOGLE_GEMINI_AI_API_KEY=your_google_gemini_ai_api_key
    VITE_GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Log in using your Google account.
3. Fill in your trip preferences.
4. Generate your personalized itinerary.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
