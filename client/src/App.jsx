import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { routes } from "./config/routes";
import { HomeView } from "./views/HomeView";
import { OverviewView } from "./views/OverviewView";
import { AppBar } from "./components/Core/AppBar";
import { AboutView } from "./views/AboutView";

export const App = () => (
  <BrowserRouter>
    <AppBar />

    <Routes>
      <Route path={routes.homepage} element={<HomeView />} />
      <Route path={routes.overview} element={<OverviewView />} />
      <Route path={routes.about} element={<AboutView />} />
    </Routes>
  </BrowserRouter>
);
