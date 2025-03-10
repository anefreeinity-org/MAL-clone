import { useEffect } from "react";
import { JikanService } from "../services/jikan-service";
import { useState } from "react";
import { Card } from "../components/card";

export const SeasonalAnime = () => {
  const [seasonalAnime, setSeasonalAnime] = useState(null);
  const jikanService = new JikanService();

  useEffect(() => {
    const fetchSeasonalAnime = async () => {
      try {
        const seasonalAnime = await jikanService.getSeasonalAnime();
        console.log("Seasonal Anime:", seasonalAnime);
        setSeasonalAnime(seasonalAnime);
      } catch (error) {
        console.error("Error fetching seasonal anime:", error);
      }
    };
    fetchSeasonalAnime();
  }, []);

  return (
    <div className="flex flex-col gap-4 rounded-2xl">
      <div className="text-gray-200 text-2xl px-4 font-semibold font-sans">
        Seasonal Anime
      </div>
      <div className="relative">
        <div className="text-gray-200 px-4 flex gap-4 overflow-x-auto whitespace-nowrap max-w-full scrollbar-hide snap-x snap-mandatory">
          {seasonalAnime?.data?.map((anime, index) => (
            <Card key={index} anime={anime} />
          ))}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-2 bg-transparent w-32 h-32 opacity-0 hover:opacity-100 group">
          <div className="px-4 py-2 w-8 bg-red-500 absolute top-1/2 -translate-y-1/2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};
