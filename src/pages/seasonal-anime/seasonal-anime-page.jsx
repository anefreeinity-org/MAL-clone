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
  const [isLoading, setIsLoading] = useState(false);

  const handleViewAnimeDetails = (name) => {
    const nameWithUnderscore = name.replaceAll(" ", "_");
    navigate(`/${nameWithUnderscore}`);
  };

  const fetchSeasonalAnime = async () => {
    try {
      setIsLoading(true);
      const anime = await jikanService.getSeasonalAnime(pageCountRef.current);
      console.log("Seasonal Anime:", anime);
      if (anime && anime.data.length > 0) {
        pageCountRef.current++;
        setSeasonalAnime((prevAnime) => [...prevAnime, ...anime.data]);
      }
      setIsLoading(false);
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
      <div className="px-8 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {seasonalAnime.map((anime, index) => (
          <Card
            key={index}
            anime={anime}
            onClick={() =>
              handleViewAnimeDetails(anime.title || anime.title_english)
            }
          />
        ))}
        {isLoading &&
          // <p>loading...</p>
          Array.from({ length: 25 }).map((_, index) => (
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
    </div>
  );
};

export default SeasonalAnimePage;
