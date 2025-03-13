import { useEffect, useRef } from "react";
import { JikanService } from "../services/jikan-service";
import { useState } from "react";
import { Card } from "../components/card";
import { handleLeftClick, handleRightClick } from "../components/handleClick";

export const RecommendedAnime = () => {
  const [recommendedAnime, setRecommendedAnime] = useState(null);
  const scrollContainerRef = useRef(null)
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
        <div className="text-gray-200 text-2xl px-4 font-semibold font-sans">
          Recommended Anime
        </div>
        <div className="flex items-center justify-center w-16 h-8 rounded-full border-2 border-gray-600 text-gray-200 text-sm font-semibold font-sans cursor-pointer hover:bg-gray-600 transition">
          view all
        </div>
      </div>
      <div className="relative">
        <div ref={scrollContainerRef} className="text-gray-200 px-4 flex gap-4 overflow-x-auto whitespace-nowrap max-w-full scrollbar-hide snap-x snap-mandatory scroll-smooth">
          {recommendedAnime?.data?.map((anime, index) => (
            <Card key={index} anime={anime} />
          ))}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-2 bg-transparent w-32 h-32 opacity-0 hover:opacity-100 group">
          <div className="px-4 py-2 w-8 absolute top-1/2 -translate-y-1/2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer" onClick={() => handleLeftClick(scrollContainerRef)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="22" fill="#FAFAFA" strokeWidth="2" />

              <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 -960 960 960" fill="#000000" x="12" y="12">
                <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
              </svg>
            </svg>
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 bg-transparent w-32 h-32 opacity-0 hover:opacity-100 group">
          <div className="px-4 py-2 w-8 absolute top-1/2 -translate-y-1/2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer" onClick={() => handleRightClick(scrollContainerRef)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="22" fill="#FAFAFA" strokeWidth="2" />

              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 -960 960 960" fill="#000000" x="12" y="12">
                <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z" />
              </svg>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
