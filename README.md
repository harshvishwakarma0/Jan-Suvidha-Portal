# 🇮🇳 Jan Suvidha Portal

A modern, responsive web portal that provides a **one-stop directory of 75+ Indian Government Schemes** — helping citizens discover, understand, and apply for welfare programmes across agriculture, health, education, business, housing, social security, and more.

![Built with React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

---

## ✨ Features

- **75+ Government Schemes** with complete details — eligibility, benefits, documents, how to apply, and official links
- **9 Categories** — Agriculture & Rural, Health & Wellness, Business & MSME, Social Security, Housing & Shelter, Women & Child, Education & Skills, Infrastructure & Development, Essential Documents
- **Search & Filter** — real-time search across all scheme names, categories, and ministries
- **Dark Mode** — full light/dark theme toggle with system preference detection
- **Responsive Design** — works seamlessly on desktop, tablet, and mobile
- **Scheme Detail Cards** — expandable cards with structured information panels
- **Sidebar Navigation** — quick category-based browsing with scheme counts

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and **npm** 9+

### Installation

```bash
# Clone or navigate to the project folder
cd "Jan Suvidha Portal"

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will open at `http://localhost:5173` (or the next available port).

### Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
Jan Suvidha Portal/
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Top navigation bar with search & theme toggle
│   │   ├── Sidebar.jsx      # Category sidebar with icons
│   │   ├── SchemeCard.jsx    # Individual scheme display card
│   │   └── SchemeList.jsx    # Scheme listing with filters
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/light mode context provider
│   ├── data/
│   │   └── masterDatabase.js # 📦 All 75+ schemes & category definitions
│   ├── App.jsx              # Root application component
│   ├── index.css            # Global styles & Tailwind imports
│   └── main.jsx             # Application entry point
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite build configuration
├── package.json
└── README.md
```

---

## 📊 Scheme Categories

| Category | Icon | Schemes | Examples |
|---|---|---|---|
| Agriculture & Rural | 🚜 | 12+ | PM-KISAN, PM Fasal Bima, Kisan Credit Card |
| Health & Wellness | ❤️ | 8+ | Ayushman Bharat, Jan Arogya, PMSMA |
| Business & MSME | 💼 | 12+ | MUDRA, PM Vishwakarma, Stand-Up India |
| Social Security | 🛡️ | 7+ | PM-JAY, NSAP, PM Garib Kalyan Anna Yojana |
| Housing & Shelter | 🏠 | 2+ | PM Awas Yojana (Urban & Gramin) |
| Women & Child | 👶 | 8+ | Beti Bachao Beti Padhao, Ladki Bahin, Mahila Samman |
| Education & Skills | 🎓 | 14+ | PM Vidyalaxmi, DDU-GKY, Samagra Shiksha |
| Infrastructure & Dev | 🏗️ | 8+ | Jal Jeevan Mission, Swachh Bharat, PMGSY |
| Essential Documents | 📄 | 4+ | Aadhar, PAN, Voter ID, Passport |

---

## 🛠️ Tech Stack

- **Frontend:** React 18 with functional components & hooks
- **Build Tool:** Vite 5 for fast HMR and optimized builds
- **Styling:** Tailwind CSS 3 with dark mode (`class` strategy)
- **Icons:** Lucide React icon library
- **State Management:** React Context API (theme management)
- **Data:** Static JavaScript module (`masterDatabase.js`)

---

## 📝 Adding New Schemes

To add a new scheme, append an object to the `schemes` array in `src/data/masterDatabase.js`:

```javascript
{
    id: 'unique-scheme-id',
    title: 'Scheme Display Name',
    category: 'agriculture', // must match a CATEGORIES id
    ministry: 'Ministry Name',
    eligibility: ['Criteria 1', 'Criteria 2'],
    benefits: 'Description of scheme benefits...',
    applicationMode: 'Online', // Online or Offline
    documentsRequired: ['Document 1', 'Document 2'],
    officialLink: 'https://official-website.gov.in',
    howToApply: ['Step 1', 'Step 2', 'Step 3'],
}
```

---

## 📜 License

This project is open-source and available for educational and civic purposes.

---

> **Disclaimer:** This portal is an informational resource. For the most current scheme details, eligibility, and application procedures, always refer to the official government websites linked in each scheme.
