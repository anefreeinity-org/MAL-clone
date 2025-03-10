import { useEffect } from "react";
import { JikanService } from "../services/jikan-service";
import { useState } from "react";
import { Card } from "../components/card";

export const PopularAnime = () => {
  const [popularAnime, setPopularAnime] = useState(null);
  const jikanService = new JikanService();

  useEffect(() => {
    const fetchPopularAnime = async () => {
      try {
        const popularAnime = await jikanService.getPopularAnime();
        console.log("Popular Anime:", popularAnime);
        setPopularAnime(popularAnime);
      } catch (error) {
        console.error("Error fetching popular anime:", error);
      }
    };
    fetchPopularAnime();
  }, []);

  return (
    <div className="text-gray-200 px-4 flex gap-4 overflow-x-auto whitespace-nowrap max-w-full scrollbar-hide snap-x snap-mandatory">
      {popularAnime?.data?.map((anime) => (
        <Card key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

//https://api.jikan.moe/v4/top/anime
