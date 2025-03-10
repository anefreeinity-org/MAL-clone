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
    <div className="text-gray-200 px-4 flex gap-4 overflow-x-auto whitespace-nowrap max-w-full scrollbar-hide snap-x snap-mandatory">
      {seasonalAnime?.data?.map((anime) => (
        <Card key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};
