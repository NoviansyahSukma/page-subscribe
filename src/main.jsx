import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import SitePage from "./components/SitePage";
import SiteList from "./components/site-list/SiteList";
import BintaroPackage from "./components/site-list/site-package/BintaroPackage";
import CibuburPackage from "./components/site-list/site-package/CibuburPackage";
import JuandaPackage from "./components/site-list/site-package/JuandaPackage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SitePage />}>
          <Route index element={<SiteList />} />
          <Route path="package">
            <Route path="bintaro" element={<BintaroPackage />} />
            <Route path="cibubur" element={<CibuburPackage />} />
            <Route path="juanda" element={<JuandaPackage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
