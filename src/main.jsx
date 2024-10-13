import React from "react";
import ReactDOM from "react-dom/client";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home_page/Home.jsx";
import Team from "./pages/Team_page/Team.jsx";
import GridGallery from "./pages/Gallery_page/GridGallery.jsx";
import Eventspage from "./pages/Events_page/Events.jsx";
import Root from "./layout/Root.jsx";

// router for creating router from react router DOM 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
        <Route path="" element={<Home/>} />
        <Route path="/Team" element={<Team />} />
        <Route path="/gallery" element={<GridGallery />} />
        <Route path="/eventpg" element={<Eventspage />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
