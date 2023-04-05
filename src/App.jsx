import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { routes } from "./config/routes";
import { HomeView } from "./views/home";
import { OverviewView } from "./views/overview";



export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.homepage} element={<HomeView />} />
        <Route path={routes.overview} element={<OverviewView />} />
      </Routes>
    </BrowserRouter>
  );
};
