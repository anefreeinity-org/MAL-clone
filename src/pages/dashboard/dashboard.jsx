import { PopularAnime } from "./populor-anime";
import { RecommendedAnime } from "./recommended-anime";
import { SeasonalAnime } from "./seasonal-anime";

export const DashBoard = () => {
  return (
    <div className="bg-gray-800 w-screen py-6 flex flex-col gap-6">
      <SeasonalAnime />
      <PopularAnime />
      <RecommendedAnime />
    </div>
  );
};
