import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router";
import SitePage from "./components/SitePage";
import SiteList from "./components/SiteList";
import Bintaro from "./components/package/Bintaro";
import Cibubur from "./components/package/Cibubur";
import Juanda from "./components/package/Juanda";
import Surabaya from "./components/package/Surabaya";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<SitePage />}>
          <Route index element={<SiteList />} />
          <Route path="paket">
            <Route path="bintaro" element={<Bintaro />} />
            <Route path="cibubur" element={<Cibubur />} />
            <Route path="juanda" element={<Juanda />} />
            <Route path="surabaya" element={<Surabaya />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
