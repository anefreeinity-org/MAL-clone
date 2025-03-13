import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AnimeDetails from "./anime-details/anime-details";
import { DashBoard } from "./dashboard/dashboard";
import PopularAnimePage from "./popular-anime/popular-anime-page";
import RecommendedAnimePage from "./recommended-anime/recommended-anime-page";
import SeasonalAnimePage from "./seasonal-anime/seasonal-anime-page";

const routes = [
  {
    path: "/",
    element: <DashBoard />,
    errorElement: <p>Page is not found</p>,
  },
  {
    path: "/seasonal-anime",
    element: <SeasonalAnimePage />,
  },
  {
    path: "/recommended-anime",
    element: <RecommendedAnimePage />,
  },
  {
    path: "/popular-anime",
    element: <PopularAnimePage />,
  },
  {
    path: ":anime-details",
    element: <AnimeDetails />,
  },
];

const browserRouter = createBrowserRouter(routes);

const Root = () => {
  return (
    <div className="relative flex flex-col">
      {/* <div className="text-white top-0 left-0 sticky">header</div> */}
      <RouterProvider router={browserRouter} />
    </div>
  );
};

export default Root;
