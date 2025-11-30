# Portfolio Website

A modern, interactive portfolio website built with Next.js 15, Tailwind CSS, and AI capabilities powered by Genkit.

## Features

- 🎨 **Modern UI/UX**: Built with Tailwind CSS and Shadcn UI for a premium, responsive design.
- 🤖 **AI Integration**: Features an AI Advisor and Chatbox powered by Google's Genkit.
- 📱 **Fully Responsive**: Optimized for all devices.
- ⚡ **High Performance**: Powered by Next.js App Router and Turbopack.

## Sections

- **Hero**: Introduction and landing area.
- **About**: Personal background and bio.
- **Experience**: Professional work history.
- **Projects**: Showcase of portfolio projects.
- **Certifications & Awards**: Achievements and credentials.
- **Education**: Academic background.
- **Contact**: Easy ways to get in touch.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix UI)
- **AI**: [Genkit](https://firebase.google.com/docs/genkit)
- **Backend**: Firebase

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portofolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (if required for Firebase/Genkit).

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:9002`.

### Running Genkit (AI Features)

To start the Genkit developer UI and backend:

```bash
npm run genkit:dev
```

## Scripts

- `npm run dev`: Start Next.js dev server (port 9002).
- `npm run build`: Build for production.
- `npm run start`: Start production server.
- `npm run genkit:dev`: Start Genkit dev server.
- `npm run lint`: Run linter.
