import { useEffect, useRef } from "react";
import { JikanService } from "../../services/jikan-service";
import { useState } from "react";
import { Card } from "../../components/card";
import LeftShift from "../../components/left-shift";
import RightShift from "../../components/right-shift";
import { useNavigate } from "react-router-dom";

export const PopularAnime = () => {
  const [popularAnime, setPopularAnime] = useState(null);
  const scrollContainerRef = useRef(null);
  const jikanService = new JikanService();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopularAnime = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const popularAnime = await jikanService.getPopularAnime();
        console.log("Popular Anime:", popularAnime);
        setPopularAnime(popularAnime);
      } catch (error) {
        console.error("Error fetching popular anime:", error);
      }
    };
    fetchPopularAnime();
  }, []);

  const handelViewAll = () => {
    navigate("/popular-anime");
  };

  const handleViewAnimeDetails = (name) => {
    const nameWithUnderscore = name.replaceAll(" ", "_");
    navigate(`/${nameWithUnderscore}`);
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl">
      <div className="flex flex-row items-center justify-between">
        <div className="text-gray-200 text-2xl px-4 font-semibold font-sans select-none">
          Popular Anime
        </div>
        <button
          className="mr-4 px-2 py-1 rounded-full border-2 border-gray-600 text-gray-200 text-sm font-semibold font-sans cursor-pointer hover:bg-gray-600 transition"
          onClick={handelViewAll}
        >
          view all
        </button>
      </div>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="text-gray-200 px-4 flex gap-4 overflow-x-auto whitespace-nowrap max-w-full scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          {popularAnime?.data?.map((anime, index) => (
            <Card
              width="w-44"
              key={index}
              anime={anime}
              onClick={() =>
                handleViewAnimeDetails(anime.title || anime.title_english)
              }
            />
          ))}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-2 bg-transparent w-32 h-32 opacity-0 hover:opacity-100 group">
          <LeftShift scrollContainerRef={scrollContainerRef} />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 bg-transparent w-32 h-32 opacity-0 hover:opacity-100 group">
          <RightShift scrollContainerRef={scrollContainerRef} />
        </div>
      </div>
    </div>
  );
};
