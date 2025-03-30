import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { JikanService } from "../../services/jikan-service";

const AnimeDetails = () => {
  const { animeDetails: animeDetailsRoute } = useParams();
  const [animeDetails, setAnimeDetails] = useState(null);
  const [animePictures, setAnimePictures] = useState([]);
  const jikanService = new JikanService();
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handelHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const fragments = animeDetailsRoute.split("-");
    const id = fragments[fragments.length - 1];
    console.log(id);

    const fetchAnimeDetails = async () => {
      try {
        const response = await jikanService.getAnimeDetails(id);
        setAnimeDetails(response.data);
        console.log("Anime details", response);
      } catch (error) {
        console.log("Error fetching anime details", error);
      }
    };

    const fetchAnimePictures = async () => {
      try {
        const response = await jikanService.getAnimePictures(id);
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
    <div className="bg-white bg-opacity-5">
      {animeDetails && (
        <div className="grid w-full md:grid-flow-col grid-cols-1 md:auto-cols-auto md:gap-4">
          <div className="w-full flex justify-center md:block md:w-60 pt-16 md:pl-10">
            {animePictures.length > 1 && (
              <img
                src={animePictures[0].jpg.large_image_url}
                alt=""
                className="w-56 object-contain rounded-xl"
              />
            )}
          </div>
          <div className="w-full md:w-[calc((100vw*0.75)-20rem)] py-12 px-6 md:px-0 md:py-16 md:pr-16">
            <div className="grid grid-cols-3 md:flex md:gap-7">
              <a
                onClick={handelHome}
                className="text-gray-200 mb-4 text-center cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-50 to-purple-50 hover:from-purple-500 hover:to-blue-500 transition duration-300"
              >
                Home
              </a>
              <div className="text-gray-400 text-center">
                {animeDetails.title_english}
              </div>
              <span className="text-gray-200 mb-4 cursor-pointer text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-50 to-purple-50 hover:from-purple-500 hover:to-blue-500 transition duration-500">
                {animeDetails.duration.slice(0, 6)}
              </span>
            </div>
            <h2 className="text-4xl text-gray-200 text-center md:text-start font-sans font-bold mb-5">
              {animeDetails.title}
            </h2>
            <div className="flex flex-wrap md:gap-3 lg:gap-2 justify-center md:justify-normal mb-8">
              <button className="flex bg-gray-200 rounded-3xl px-5 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="black"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
                Add to List
              </button>
            </div>
            <div className="text-gray-200 text-justify">
              <p
                className={`transition-all ${
                  isExpanded ? "line-clamp-none" : "line-clamp-3"
                }`}
              >
                {animeDetails.synopsis}
              </p>
              <span
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-1 cursor-pointer font-sans font-bold"
              >
                {isExpanded ? "- less" : "+ more"}
              </span>
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="hidden md:block text-gray-200 mt-6 mr-8">
                <span className="font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition duration-500">
                  Share Anime
                </span>
                <p>to your friends</p>
              </div>
              <div className="flex justify-center flex-col gap-2 md:hidden mt-6">
                <div className="grid grid-cols-3">
                  <button className="border border-transparent text-gray-200 rounded-3xl bg-blue-400 flex items-center px-5 py-1 mr-2 hover:bg-blue-600 hover:scale-110 hover:border-white transition-all duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#fafafa"
                        d="M8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm3.746 5.032c-.125.8-.66 4.217-.933 5.616-.116.61-.342.813-.56.833-.476.044-.838-.314-1.3-.617-.72-.471-1.127-.767-1.823-1.221-.808-.534-.284-.827.176-1.303.121-.124 2.226-2.043 2.267-2.217.005-.02.009-.093-.035-.132s-.107-.027-.152-.015c-.066.015-1.11.707-3.14 2.085-.298.202-.567.3-.807.295-.265-.005-.776-.149-1.155-.274-.467-.15-.838-.23-.805-.486.017-.134.2-.27.55-.41 2.127-.857 3.548-1.428 4.267-1.713 2.033-.81 2.45-.948 2.727-.948.06 0 .193.013.28.086.073.063.093.147.103.208.007.062.022.195.013.301z"
                      />
                    </svg>
                    <span className="px-2">Share</span>
                  </button>
                  <button className="border border-transparent text-gray-200 rounded-3xl bg-black flex items-center px-5 py-1 mr-2 hover:scale-110 hover:border-white transition-all duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#fafafa"
                        d="M11.93 2H14L8.93 7.27L14.67 14H10.4L6.8 10.53L3.27 14H1.13L6.53 8.33L0.67 2H5.07L8.33 5.8L11.93 2ZM11.2 12.93H12.47L4.07 3H2.73L11.2 12.93Z"
                      />
                    </svg>
                    <span className="px-2">Tweet</span>
                  </button>
                  <button className="border border-transparent text-gray-200 rounded-3xl bg-blue-600 flex items-center px-5 py-1 mr-2 hover:bg-blue-700 hover:scale-110 hover:border-white transition-all duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#fafafa"
                        d="M16 8.05C16 3.6 12.418 0 8 0S0 3.6 0 8.05c0 3.996 2.925 7.315 6.75 7.951v-5.625H4.719V8h2.031V6.238C6.75 4.23 7.945 3.118 9.689 3.118c.875 0 1.792.157 1.792.157v1.973H10.49c-.993 0-1.302.617-1.302 1.25V8h2.218l-.354 2.375h-1.864v5.625C13.075 15.365 16 12.046 16 8.05z"
                      />
                    </svg>
                    <span className="px-2">Share</span>
                  </button>
                </div>
                <div className="flex gap-2 justify-center">
                  <button className="border border-transparent text-gray-200 rounded-3xl bg-orange-600 flex items-center px-3 py-1 mr-2 hover:bg-orange-700 hover:scale-110 hover:border-white transition-all duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#fafafa"
                        d="M16 8.2c0-1.4-1.2-2.5-2.6-2.5-.6 0-1.2.2-1.7.6-1.1-.8-2.6-1.3-4.1-1.3l.9-3.9 2.7.6a1.3 1.3 0 1 0 .1-.7L8.2.1 7.2 4a6.9 6.9 0 0 0-4.1 1.3A2.6 2.6 0 0 0 .6 5.7 2.6 2.6 0 0 0 0 8.2c0 1.1.7 2.1 1.7 2.5a3.5 3.5 0 0 0 1.3 1.7c.1 1.3 1.1 2.5 2.5 2.5.8 0 1.5-.3 2.2-.9a3 3 0 0 0 2.2.9c1.4 0 2.5-1.1 2.5-2.5a3.5 3.5 0 0 0 1.3-1.7c1-.4 1.7-1.4 1.7-2.5zM5.1 10.5a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm5.2 1.8c-.5.6-1.2.9-2 .9s-1.5-.3-2-.9a.4.4 0 0 1 0-.6c.2-.2.4-.2.5 0 .5.4.9.6 1.4.6.5 0 1-.2 1.4-.6.2-.2.4-.2.5 0 .2.2.2.4 0 .6zm-.1-3A1.2 1.2 0 1 1 11.4 8a1.2 1.2 0 0 1-1.2 1.2z"
                      />
                    </svg>
                  </button>
                  <button className="border border-transparent text-gray-200 rounded-3xl bg-lime-500 flex items-center px-3 py-1 mr-2 hover:bg-lime-600 hover:scale-110 hover:border-white transition-all duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 -960 960 960"
                      width="16px"
                      fill="#e3e3e3"
                    >
                      <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="hidden md:flex flex-wrap md:gap-2 lg:gap-1 mt-9">
                <button className="border border-transparent text-gray-200 rounded-3xl bg-blue-400 flex items-center px-5 py-1 mr-2 hover:bg-blue-600 hover:scale-110 hover:border-white transition-all duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#fafafa"
                      d="M8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm3.746 5.032c-.125.8-.66 4.217-.933 5.616-.116.61-.342.813-.56.833-.476.044-.838-.314-1.3-.617-.72-.471-1.127-.767-1.823-1.221-.808-.534-.284-.827.176-1.303.121-.124 2.226-2.043 2.267-2.217.005-.02.009-.093-.035-.132s-.107-.027-.152-.015c-.066.015-1.11.707-3.14 2.085-.298.202-.567.3-.807.295-.265-.005-.776-.149-1.155-.274-.467-.15-.838-.23-.805-.486.017-.134.2-.27.55-.41 2.127-.857 3.548-1.428 4.267-1.713 2.033-.81 2.45-.948 2.727-.948.06 0 .193.013.28.086.073.063.093.147.103.208.007.062.022.195.013.301z"
                    />
                  </svg>
                  <span className="px-2">Share</span>
                </button>
                <button className="border border-transparent text-gray-200 rounded-3xl bg-black flex items-center px-5 py-1 mr-2 hover:scale-110 hover:border-white transition-all duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#fafafa"
                      d="M11.93 2H14L8.93 7.27L14.67 14H10.4L6.8 10.53L3.27 14H1.13L6.53 8.33L0.67 2H5.07L8.33 5.8L11.93 2ZM11.2 12.93H12.47L4.07 3H2.73L11.2 12.93Z"
                    />
                  </svg>

                  <span className="px-2">Tweet</span>
                </button>
                <button className="border border-transparent text-gray-200 rounded-3xl bg-blue-600 flex items-center px-5 py-1 mr-2 hover:bg-blue-800 hover:scale-110 hover:border-white transition-all duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#fafafa"
                      d="M16 8.05C16 3.6 12.418 0 8 0S0 3.6 0 8.05c0 3.996 2.925 7.315 6.75 7.951v-5.625H4.719V8h2.031V6.238C6.75 4.23 7.945 3.118 9.689 3.118c.875 0 1.792.157 1.792.157v1.973H10.49c-.993 0-1.302.617-1.302 1.25V8h2.218l-.354 2.375h-1.864v5.625C13.075 15.365 16 12.046 16 8.05z"
                    />
                  </svg>
                  <span className="px-2">Share</span>
                </button>
                <button className="border border-transparent text-gray-200 rounded-3xl bg-orange-600 flex items-center px-5 py-1 mr-2 hover:bg-orange-700 hover:scale-110 hover:border-white transition-all duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#fafafa"
                      d="M16 8.2c0-1.4-1.2-2.5-2.6-2.5-.6 0-1.2.2-1.7.6-1.1-.8-2.6-1.3-4.1-1.3l.9-3.9 2.7.6a1.3 1.3 0 1 0 .1-.7L8.2.1 7.2 4a6.9 6.9 0 0 0-4.1 1.3A2.6 2.6 0 0 0 .6 5.7 2.6 2.6 0 0 0 0 8.2c0 1.1.7 2.1 1.7 2.5a3.5 3.5 0 0 0 1.3 1.7c.1 1.3 1.1 2.5 2.5 2.5.8 0 1.5-.3 2.2-.9a3 3 0 0 0 2.2.9c1.4 0 2.5-1.1 2.5-2.5a3.5 3.5 0 0 0 1.3-1.7c1-.4 1.7-1.4 1.7-2.5zM5.1 10.5a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm5.2 1.8c-.5.6-1.2.9-2 .9s-1.5-.3-2-.9a.4.4 0 0 1 0-.6c.2-.2.4-.2.5 0 .5.4.9.6 1.4.6.5 0 1-.2 1.4-.6.2-.2.4-.2.5 0 .2.2.2.4 0 .6zm-.1-3A1.2 1.2 0 1 1 11.4 8a1.2 1.2 0 0 1-1.2 1.2z"
                    />
                  </svg>
                </button>
                <button className="border border-transparent text-gray-200 rounded-3xl bg-lime-500 flex items-center px-5 py-1 mr-2 hover:bg-lime-600 hover:scale-110 hover:border-white transition-all duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16px"
                    viewBox="0 -960 960 960"
                    width="16px"
                    fill="#e3e3e3"
                  >
                    <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[calc(100vw*0.25)] bg-white bg-opacity-10 py-16 px-8">
            <h3 className="text-gray-200 font-sans font-bold mb-2">
              Japanese:{" "}
              <span className="text-gray-300 font-normal">
                {animeDetails.title_japanese}
              </span>
            </h3>
            <h3 className="text-gray-200 font-sans font-bold mb-2">
              Synonyms:{" "}
              <span className="text-gray-300 font-normal">
                {animeDetails.title_synonyms[0]}
              </span>
            </h3>
            <h3 className="text-gray-200 font-sans font-bold mb-2">
              Aired:{" "}
              <span className="text-gray-300 font-normal">
                {animeDetails.aired.string}
              </span>
            </h3>
            <h3 className="text-gray-200 font-sans font-bold mb-2">
              Premiered:{" "}
              <span className="text-gray-300 font-normal">
                {animeDetails.season} {animeDetails.year}
              </span>
            </h3>
            <h3 className="text-gray-200 font-sans font-bold mb-2">
              Duration:{" "}
              <span className="text-gray-300 font-normal">
                {animeDetails.duration}
              </span>
            </h3>
            <h3 className="text-gray-200 font-sans font-bold mb-2">
              Status:{" "}
              <span className="text-gray-300 font-normal">
                {animeDetails.status}
              </span>
            </h3>
            <h3 className="text-gray-200 font-sans font-bold mb-2">
              Score:{" "}
              <span className="text-gray-300 font-normal">
                {animeDetails.score}
              </span>
            </h3>
            <h3 className="text-gray-200 font-sans font-bold mb-2 flex">
              Genres:{" "}
              <span className="text-gray-300 font-normal flex flex-wrap gap-1 ml-1">
                {animeDetails.genres.map((genre) => (
                  <span
                    key={genre.name}
                    className="border border-gray-500 hover:border-white hover:bg-gray-700 text-gray-200 px-2 py-0.5 rounded-3xl cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out"
                  >
                    {genre.name}
                  </span>
                ))}
              </span>
            </h3>
            <h3 className="text-gray-200 font-sans font-bold mb-2">
              Studios:{" "}
              <span className="text-gray-300 font-normal">
                {animeDetails.studios[0].name}
              </span>
            </h3>
            <h3 className="text-gray-200 font-sans font-bold mb-2">
              Producers:{" "}
              <span className="text-gray-300 font-normal">
                {animeDetails.producers
                  .map((producer) => producer.name)
                  .join(", ")}
              </span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeDetails;
