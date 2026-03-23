# Resilient Eco-Architecture AI Generator

An open-source, AI-powered architectural dossier generator. Describe your vision, and the AI will draft a comprehensive, 5-part professional PDF dossier featuring eco-friendly, sustainable, and minimal modern design principles.

![App Preview](https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1000)

## Features

- **AI-Powered Drafting**: Generates a detailed 800-word architectural plan using `gemini-3-flash-preview`.
- **Multi-Image Rendering**: Simultaneously generates 5 cohesive, photorealistic architectural visualizations (Hero, Landscape, Interior, Detail, Night) using `gemini-2.5-flash-image`.
- **Professional PDF Export**: Automatically compiles the text and images into a beautifully formatted, minimal modern PDF dossier using `jsPDF`.
- **Strict Design Philosophy**: Enforces eco-friendly, zero-maintenance, earthquake-resistant, and extreme-weather-resistant design constraints across all generated content.

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide React
- **AI Integration**: `@google/genai` SDK
- **Document Generation**: `jspdf`

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- A Google Gemini API Key (Get one at [Google AI Studio](https://aistudio.google.com/))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/eco-architecture-ai.git
   cd eco-architecture-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy the example environment file and add your API key.
   ```bash
   cp .env.example .env
   ```
   Open `.env` and replace `your_api_key_here` with your actual Gemini API key.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

## Deployment

This project is a standard Vite React application and can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

### Vercel / Netlify
1. Connect your GitHub repository.
2. Set the Build Command to `npm run build`.
3. Set the Output Directory to `dist`.
4. Add your `GEMINI_API_KEY` to the Environment Variables in the deployment dashboard.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
