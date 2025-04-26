# ContentIX UI

This repository contains the source code for the ContentIX UI, a simple landing page demonstration built with modern web technologies.

**Live Demo:** [https://contentix-ui.vercel.app/](https://contentix-ui.vercel.app/)

## Overview

ContentIX UI showcases a clean landing page design featuring:

- A prominent headline and descriptive text.
- A clear call-to-action button.
- A visually distinct layout separating text content and a splash image area.
- A dynamic dark/light mode toggle with user preference persistence via `localStorage`.
- Custom theming integrated with Ant Design.

Inspired by this [post on X](https://x.com/anna_designer__/status/1915799928846114905)

## Features

- ✨ **React & TypeScript:** Built using React functional components and TypeScript for type safety.
- 🎨 **Ant Design:** Leverages the Ant Design component library for UI elements like Buttons, Images, and FloatButton.
- 💅 **Tailwind CSS:** Uses Tailwind CSS for utility-first styling and layout.
- 🌗 **Dark/Light Mode:** Includes a theme toggle that switches between dark and light modes. The selected theme is saved in `localStorage`.
- ⚙️ **CSS Variables:** Utilizes CSS variables for theme properties (background color, text color, primary color, splash image) allowing easy theme switching.
- 🚀 **Vite:** (Assumed) Likely built using Vite for a fast development experience.

## Technologies Used

- React + Vite + TS
- TypeScript
- Ant Design
- Tailwind CSS

## Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

- Node.js (v16 or later recommended)
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd contentix-ui
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
