import { useEffect, useRef, useState } from "react";
import { Card } from "../../components/card";
import { useNavigate } from "react-router-dom";
import { JikanService } from "../../services/jikan-service";

const SeasonalAnimePage = () => {
  const [seasonalAnime, setSeasonalAnime] = useState([]);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const jikanService = new JikanService();
  const pageCountRef = useRef(1);
  const debounceTimeout = useRef(null);

  const handelViewAnimeDetails = (name) => {
    const nameWithUnderscore = name.replaceAll(" ", "_");
    navigate(`/${nameWithUnderscore}`);
  };

  const fetchSeasonalAnime = async () => {
    try {
      const anime = await jikanService.getSeasonalAnime(pageCountRef.current);
      console.log("Seasonal Anime:", anime);
      if (anime && anime.data.length > 0) {
        pageCountRef.current++;
        setSeasonalAnime((prevAnime) => [...prevAnime, ...anime.data]);
      }
    } catch (error) {
      console.error("Error fetching seasonal anime:", error);
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    if (
      container.scrollHeight - container.scrollTop <=
      container.clientHeight + 1
    ) {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(() => {
        fetchSeasonalAnime();
      }, 1000);
    }
  };

  useEffect(() => {
    fetchSeasonalAnime();
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
        if (debounceTimeout.current) {
          clearTimeout(debounceTimeout.current);
        }
      }
    };
  }, []);

  return (
    <div className="h-screen overflow-y-auto" ref={containerRef}>
      <h2 className="px-8 pt-6 text-3xl font-bold text-gray-200 mb-4">
        Seasonal Anime
      </h2>
      <div className="px-8 py-4 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-8">
        {seasonalAnime.map((anime, index) => (
          <Card
            key={index}
            anime={anime}
            onClick={() =>
              handelViewAnimeDetails(anime.title || anime.title_english)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default SeasonalAnimePage;
