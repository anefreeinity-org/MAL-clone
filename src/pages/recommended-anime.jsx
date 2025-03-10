import { useEffect } from "react";
import { JikanService } from "../services/jikan-service";
import { useState } from "react";
import { Card } from "../components/card";

export const RecommendedAnime = () => {
  const [recommendedAnime, setRecommendedAnime] = useState(null);
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
    <div className="text-gray-200 px-4 flex gap-4 overflow-x-auto whitespace-nowrap max-w-full scrollbar-hide snap-x snap-mandatory">
      {recommendedAnime?.data?.map((anime) => (
        <Card key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

//https://api.jikan.moe/v4/recommendations/anime
