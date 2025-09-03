# Earthquake Visualizer

An interactive web application for visualizing global earthquake data in real-time. Built with modern web technologies, this project provides an intuitive map-based interface for exploring earthquake locations, magnitudes, and geological information.

## 🌟 Features

- **Interactive World Map**: Powered by Leaflet for smooth navigation and exploration
- **Real-time Data**: Live earthquake data from USGS with automatic updates
- **Rich Information Display**: Detailed popups showing location, magnitude, time, and depth
- **Responsive Design**: Modern, mobile-friendly interface built with Tailwind CSS
- **Performance Optimized**: Built with React and Vite for fast loading and smooth interactions
- **User Experience**: Intuitive zoom, pan, and search capabilities

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Mapping Library**: React-Leaflet + Leaflet
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Data Source**: USGS Earthquake API

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/earthquake-visualizer.git
cd earthquake-visualizer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Additional Libraries

This project requires several additional packages for full functionality:

```bash
# Tailwind CSS and build tools
npm install -D tailwindcss postcss autoprefixer

# HTTP client for API requests
npm install axios

# Mapping libraries
npm install react-leaflet leaflet
```

### 4. Initialize Tailwind CSS

```bash
npx tailwindcss init -p
```

### 5. Configure Vite

Update your `vite.config.js` to include Tailwind CSS:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 6. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📊 Data Source

This application utilizes the [USGS Earthquake API](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson) to provide real-time earthquake data. The API delivers comprehensive geological information including:

- Earthquake coordinates and depth
- Magnitude measurements
- Timestamp data
- Location details

## 🏗️ Project Structure

```
src/
├── api/           # API integration and data fetching
├── components/    # Reusable React components
├── hooks/         # Custom React hooks
├── assets/        # Static assets and images
└── App.jsx        # Main application component
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

If you encounter any issues or have questions, please open an issue in the GitHub repository.

---

**Built with ❤️ using React, Vite, and Leaflet**



