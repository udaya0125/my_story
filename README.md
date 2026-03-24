# 📖 Whispers of the Forgotten

> *An immersive, interactive story experience built with React — where forgotten voices come to life.*

🌐 **Live Site:** [whispers-of-forgotten.vercel.app](https://whispers-of-forgotten.vercel.app)
📦 **Repository:** [github.com/udaya0125/my_story](https://github.com/udaya0125/my_story)

---

## ✨ About the Project

**Whispers of the Forgotten** is an interactive narrative web experience that invites readers to journey through a hauntingly immersive story. Built with React and deployed on Vercel, it combines atmospheric visuals, cinematic animations powered by GSAP and Framer Motion, and structured story chapters to create a reading experience that feels truly alive.

Whether you're here to explore forgotten tales or discover hidden chapters, every interaction draws you deeper into the narrative world.

---

## 🚀 Features

### 📚 Story Chapters & Content
- Structured, multi-chapter narrative with a clear story arc
- Rich prose content crafted to evoke emotion and curiosity
- Progressive story reveal — content unfolds as you explore
- Seamless chapter navigation powered by **React Router**

### 🖱️ User Interaction
- Interactive elements that respond to reader choices and clicks
- Smooth client-side routing between chapters and story sections
- Intuitive UI so readers stay immersed in the story, not the interface

### 🎨 Animations & Visuals
- Cinematic entrance and transition animations using **Framer Motion**
- Complex scroll-driven and timeline animations via **GSAP**
- Atmospheric visual design built with **Tailwind CSS v4**
- Carefully chosen typography and color palette to set the mood

### 📱 Responsive Design
- Fully responsive layout — works beautifully on mobile, tablet, and desktop
- Tailwind CSS utility classes ensure consistent styling across all breakpoints
- Touch-friendly interactions for mobile readers

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React** | UI framework & component architecture |
| **React Router** | Client-side routing between story pages |
| **Framer Motion** | Page transitions & UI animations |
| **GSAP** | Advanced scroll and timeline animations |
| **Tailwind CSS v4** | Utility-first styling & responsive design (CSS-first config) |
| **Vite** | Fast dev server & build tool |
| **Vercel** | Deployment and hosting |

---

## 📂 Project Structure

```
my_story/
├── public/                 # Static assets (favicon, fonts, images)
├── src/
│   ├── assets/             # Images, videos, and media files
│   ├── components/         # Reusable React components (buttons, nav, etc.)
│   ├── pages/              # Story pages & chapter views
│   ├── App.jsx             # Root component with router setup
│   └── main.jsx            # App entry point
├── index.html
├── vite.config.js          # Vite configuration
└── package.json
```

---

## 🧑‍💻 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or above)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/udaya0125/my_story.git
   cd my_story
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🌍 Deployment

This project is deployed on **Vercel**. Every push to the `main` branch triggers an automatic deployment.

To deploy your own fork:
1. Fork this repository
2. Go to [vercel.com](https://vercel.com) and import your fork
3. Vercel auto-detects the Vite + React setup and handles the build
4. Set build command to `npm run build` and output directory to `dist`

---

## 🤝 Contributing

Contributions, feedback, and ideas are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Udaya** — [@udaya0125](https://github.com/udaya0125)

---

*"Some stories are never truly lost — they just wait to be found."*