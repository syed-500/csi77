import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";
import Team from "./components/Team.jsx";
import Header from "./components/Header.jsx";
import GridGallery from "./components/GridGallery.jsx";
import Blogs from "./components/Blogs.jsx";

import Eventspage from "./components/Events.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/gallery" element={<GridGallery />} />
        <Route path="/eventpg" element={<Eventspage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<Blogs />} /> {/* Catch-all route */}

      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
