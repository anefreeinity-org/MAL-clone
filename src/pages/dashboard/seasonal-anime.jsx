import { useEffect, useRef } from "react";
import { JikanService } from "../../services/jikan-service";
import { useState } from "react";
import { Card } from "../../components/card";
import LeftShift from "../../components/left-shift";
import RightShift from "../../components/right-shift";
import { useNavigate } from "react-router-dom";

export const SeasonalAnime = () => {
  const [seasonalAnime, setSeasonalAnime] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const jikanService = new JikanService();
  const navigate = useNavigate();

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

  const handelViewAll = () => {
    navigate("/seasonal-anime");
  };

  const handelViewAnimeDetails = (name) => {
    const nameWithUnderscore = name.replaceAll(" ", "_");
    navigate(`/${nameWithUnderscore}`);
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl">
      <div className="flex flex-row items-center justify-between">
        <div className="text-gray-200 text-2xl px-4 font-semibold font-sans select-none">
          Seasonal Anime
        </div>
        <div
          className="flex items-center justify-center w-16 h-8 rounded-full border-2 border-gray-600 hover:border-white-800 text-gray-200 text-sm font-semibold font-sans cursor-pointer hover:bg-gray-700 transition"
          onClick={handelViewAll}
        >
          view all
        </div>
      </div>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="text-gray-200 px-4 flex gap-4 overflow-x-auto whitespace-nowrap max-w-full scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          {seasonalAnime?.data?.map((anime, index) => (
            <Card
              key={index}
              anime={anime}
              onMouseOver={() => setHoveredIndex(index)}
              onClick={() =>
                handelViewAnimeDetails(anime.title || anime.title_english)
              }
            />
          ))}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-2 bg-transparent w-32 h-32 opacity-0 hover:opacity-100 group">
          <LeftShift scrollContainerRef={scrollContainerRef} />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 bg-transparent w-32 h-32 opacity-0 hover:opacity-100 group">
          <RightShift
            scrollContainerRef={scrollContainerRef}
            isScrollable={hoveredIndex < seasonalAnime?.data?.length - 1}
          />
        </div>
      </div>
    </div>
  );
};
