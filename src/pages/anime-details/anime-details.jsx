import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { JikanService } from "../../services/jikan-service";

const AnimeDetails = () => {
  const { animeDetails: animeDetailsRoute } = useParams();
  const [animeDetails, setAnimeDetails] = useState(null);
  const [animePictures, setAnimePictures] = useState([]);
  const jikenService = new JikanService();

  useEffect(() => {
    const fragments = animeDetailsRoute.split("-");
    const id = fragments[fragments.length - 1];
    console.log(id);

    const fetchAnimeDetails = async () => {
      try {
        const response = await jikenService.getAnimeDetails(id);
        setAnimeDetails(response.data);
        console.log("Anime details", response);
      } catch (error) {
        console.log("Error fetching anime details", error);
      }
    };

    const fetchAnimePictures = async () => {
      try {
        const response = await jikenService.getAnimePictures(id);
        setAnimePictures(response.data);
        console.log("Anime pictures", response);
      } catch (error) {
        console.log("Error fetching anime pictures", error);
      }
    };

    fetchAnimeDetails();
    fetchAnimePictures();
  }, []);

  return (
    <div className="p-6">
      {animeDetails && (
        <div className="grid grid-flow-col auto-cols-auto gap-4">
          <div className="w-60">
            {animePictures.length > 1 && (
              <img
                src={animePictures[0].jpg.large_image_url}
                alt=""
                className="w-56 object-contain rounded-xl"
              />
            )}
          </div>
          <div className="w-[calc((100vw*0.75)-15rem)]">
            <h2 className="text-4xl text-gray-200 font-sans font-bold">
              {animeDetails.title}
            </h2>
          </div>
          <div className="w-[calc(100vw*0.25)]">side</div>
        </div>
      )}
    </div>
  );
};

export default AnimeDetails;
