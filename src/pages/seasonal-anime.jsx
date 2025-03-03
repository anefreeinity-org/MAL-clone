import { useEffect } from "react";
import { JikanService } from "../services/jikan-service";
import { useState } from "react";

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
        <div
          className="w-44 h-[14.5rem] bg-gray-600 rounded-2xl shadow-lg overflow-hidden flex-none snap-start flex flex-col justify-between"
          key={anime.mal_id}
        >
          <img
            src={anime.images.jpg.image_url}
            alt={anime.title}
            className="w-full h-48 object-cover"
          />
          <div className="m-auto w-full px-4">
            <h3 className="font-semibold text-sm text-gray-200 line-clamp-2 overflow-hidden">
              {anime.title_english || anime.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};
