import { PopularAnime } from "./populor-anime";
import { RecommendedAnime } from "./recommended-anime";
import { SeasonalAnime } from "./seasonal-anime";

export const DashBoard = () => {
  return (
    <div className="bg-gray-800 w-screen h-screen py-6">
      <SeasonalAnime />
      <PopularAnime />
      <RecommendedAnime />
    </div>
  );
};
