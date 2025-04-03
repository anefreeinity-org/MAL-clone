import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AnimeDetails from "./anime-details/anime-details";
import { DashBoard } from "./dashboard/dashboard";
import PopularAnimePage from "./popular-anime/popular-anime-page";
import RecommendedAnimePage from "./recommended-anime/recommended-anime-page";
import SeasonalAnimePage from "./seasonal-anime/seasonal-anime-page";
import Header from "../components/header";

const routes = [
  {
    path: "/",
    element: (
      <>
        <Header />
        <DashBoard />
      </>
    ),
  },
  {
    path: "/seasonal-anime",
    element: (
      <>
        <Header />
        <SeasonalAnimePage />
      </>
    ),
  },
  {
    path: "/recommended-anime",
    element: (
      <>
        <Header />
        <RecommendedAnimePage />
      </>
    ),
  },
  {
    path: "/popular-anime",
    element: (
      <>
        <Header />
        <PopularAnimePage />
      </>
    ),
  },
  {
    path: ":animeDetails",
    element: (
      <>
        <Header />
        <AnimeDetails />
      </>
    ),
  },
];

const browserRouter = createBrowserRouter(routes);

const Root = () => {
  return <RouterProvider router={browserRouter} />;
};

export default Root;
