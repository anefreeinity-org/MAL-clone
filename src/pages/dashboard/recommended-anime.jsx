import { useEffect, useRef } from "react";
import { JikanService } from "../../services/jikan-service";
import { useState } from "react";
import { Card } from "../../components/card";
import LeftShift from "../../components/left-shift";
import RightShift from "../../components/right-shift";

export const RecommendedAnime = () => {
  const [recommendedAnime, setRecommendedAnime] = useState(null);
  const scrollContainerRef = useRef(null);
  const jikanService = new JikanService();

  useEffect(() => {
    const fetchRecommendedAnime = async () => {
      try {
        const recommendedAnime = await jikanService.getRecommendedAnime();
        console.log("Recommended Anime:", recommendedAnime);
        setRecommendedAnime(recommendedAnime);
      } catch (error) {
        console.error("Error fetching recommended anime:", error);
      }
    };
    fetchRecommendedAnime();
  }, []);

  return (
    <div className="flex flex-col gap-4 rounded-2xl">
      <div className="flex flex-row items-center justify-between">
        <div className="text-gray-200 text-2xl px-4 font-semibold font-sans select-none">
          Recommended Anime
        </div>
        <div className="flex items-center justify-center w-16 h-8 rounded-full border-2 border-gray-600 text-gray-200 text-sm font-semibold font-sans cursor-pointer hover:bg-gray-600 transition">
          view all
        </div>
      </div>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="text-gray-200 px-4 flex gap-4 overflow-x-auto whitespace-nowrap max-w-full scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          {recommendedAnime?.data?.map((anime, index) => (
            <Card key={index} anime={anime} />
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
