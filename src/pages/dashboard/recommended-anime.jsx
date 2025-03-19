import { useEffect, useRef } from "react";
import { JikanService } from "../../services/jikan-service";
import { useState } from "react";
import { Card } from "../../components/card";
import LeftShift from "../../components/left-shift";
import RightShift from "../../components/right-shift";
import { useNavigate } from "react-router-dom";
import handleAnimeDetails from "../utilities/handle-anime-details";

export const RecommendedAnime = () => {
  const [recommendedAnime, setRecommendedAnime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const scrollContainerRef = useRef(null);
  const jikanService = new JikanService();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecommendedAnime = async () => {
      try {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const recommendedAnime = await jikanService.getRecommendedAnime();
        console.log("Recommended Anime:", recommendedAnime);
        setRecommendedAnime(recommendedAnime);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching recommended anime:", error);
      }
    };
    fetchRecommendedAnime();
  }, []);

  const handelViewAll = () => {
    navigate("/recommended-anime");
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl">
      <div className="flex flex-row items-center justify-between">
        <div className="text-gray-200 text-2xl px-4 font-semibold font-sans select-none">
          Recommended Anime
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
          {recommendedAnime?.data?.map((user, index) => (
            <Card
              width="w-44"
              key={index}
              anime={user.entry[0]}
              onClick={() =>
                handleAnimeDetails(
                  user.entry[0].title || user.entry[0].title_english,
                  user.entry[0].mal_id,
                  navigate
                )
              }
            />
          ))}
          {isLoading &&
            Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="w-full max-w-44 h-[14.5rem] rounded-2xl border border-blue-200 p-4"
              >
                <div className="flex flex-col items-center animate-pulse space-y-4">
                  <div className="w-full h-44 rounded-lg bg-gray-200"></div>
                  <div className="m-auto w-full h-4 rounded bg-gray-200"></div>
                </div>
              </div>
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
