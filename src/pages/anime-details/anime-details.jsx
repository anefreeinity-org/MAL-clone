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
                className="text-gray-200 mb-4 text-center cursor-pointer hover:text-pink-300"
              >
                Home
              </a>
              <div className="text-gray-400 text-center">
                {animeDetails.title_english}
              </div>
              <span className="text-gray-200 mb-4 cursor-pointer text-center hover:text-pink-300">
                {animeDetails.duration.slice(0, 6)}
              </span>
            </div>
            <h2 className="text-4xl text-gray-200 text-center md:text-start font-sans font-bold mb-5">
              {animeDetails.title}
            </h2>
            <div className="flex flex-wrap md:gap-3 lg:gap-2 justify-center md:justify-normal mb-8">
              <button className="flex bg-pink-300 rounded-3xl px-5 py-2 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="black"
                >
                  <path d="M320-200v-560l440 280-440 280Z" />
                </svg>
                <span>Watch now</span>
              </button>
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
                <span className="text-pink-300 font-sans font-bold">
                  Share Anime
                </span>
                <p>to your friends</p>
              </div>
              <div className="flex justify-center flex-col gap-2 md:hidden mt-6">
                <div className="grid grid-cols-3">
                  <button className="text-gray-200 rounded-3xl bg-blue-400 flex px-5 py-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="mt-1"
                    >
                      <path
                        fill="#fafafa"
                        d="M8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm3.746 5.032c-.125.8-.66 4.217-.933 5.616-.116.61-.342.813-.56.833-.476.044-.838-.314-1.3-.617-.72-.471-1.127-.767-1.823-1.221-.808-.534-.284-.827.176-1.303.121-.124 2.226-2.043 2.267-2.217.005-.02.009-.093-.035-.132s-.107-.027-.152-.015c-.066.015-1.11.707-3.14 2.085-.298.202-.567.3-.807.295-.265-.005-.776-.149-1.155-.274-.467-.15-.838-.23-.805-.486.017-.134.2-.27.55-.41 2.127-.857 3.548-1.428 4.267-1.713 2.033-.81 2.45-.948 2.727-.948.06 0 .193.013.28.086.073.063.093.147.103.208.007.062.022.195.013.301z"
                      />
                    </svg>
                    <span className="px-2">Share</span>
                  </button>
                  <button className="text-gray-200 rounded-3xl bg-black flex px-5 py-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="mt-1"
                    >
                      <path
                        fill="#fafafa"
                        d="M17.9 3H21L13.4 10.9L22 21H15.6L10.2 14.8L4.9 21H1.7L9.8 12.5L1 3H7.6L12.5 8.7L17.9 3ZM16.8 19.4H18.7L6.1 4.5H4.1L16.8 19.4Z"
                      />
                    </svg>

                    <span className="px-2">Tweet</span>
                  </button>
                  <button className="text-gray-200 rounded-3xl bg-blue-600 flex px-5 py-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="mt-1"
                    >
                      <path
                        fill="#fafafa"
                        d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 5.994 4.388 10.973 10.125 11.927v-8.437H7.078V12h3.047V9.356c0-3.007 1.792-4.677 4.533-4.677 1.313 0 2.688.235 2.688.235v2.96H15.74c-1.49 0-1.953.925-1.953 1.874V12h3.328l-.532 3.563h-2.796v8.437C19.612 23.046 24 18.067 24 12.073z"
                      />
                    </svg>
                    <span className="px-2">Share</span>
                  </button>
                </div>
                <div className="flex gap-2 justify-center">
                  <button className="text-gray-200 rounded-3xl bg-orange-600 flex px-5 py-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="mt-1"
                    >
                      <path
                        fill="#fafafa"
                        d="M24 12.3c0-2.1-1.8-3.8-3.9-3.8-.9 0-1.8.3-2.5.9-1.7-1.2-3.9-1.9-6.1-1.9l1.3-5.9 4.1.9a2 2 0 1 0 .1-1.1L12.3.2 10.8 6a10.4 10.4 0 0 0-6.2 2 4 4 0 0 0-2.5-.9A3.9 3.9 0 0 0 0 12.3c0 1.7 1 3.2 2.5 3.8a5.2 5.2 0 0 0 2 2.5c.1 2 1.7 3.7 3.8 3.7 1.2 0 2.3-.5 3.2-1.3a4.5 4.5 0 0 0 3.2 1.3c2.1 0 3.8-1.7 3.8-3.7a5.2 5.2 0 0 0 2-2.5c1.6-.6 2.5-2.1 2.5-3.8zM7.7 15.8a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm7.8 2.7c-.8.9-1.9 1.3-3 1.3s-2.2-.5-3-1.3a.6.6 0 0 1 0-.9c.2-.2.6-.2.8 0 .7.6 1.4.9 2.2.9.8 0 1.5-.3 2.2-.9.2-.2.6-.2.8 0 .2.2.2.6 0 .9zm-.1-4.5a1.8 1.8 0 1 1 3.6 0 1.8 1.8 0 0 1-3.6 0z"
                      />
                    </svg>
                  </button>
                  <button className="text-gray-200 rounded-3xl bg-lime-500 flex px-5 py-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 -960 960 960"
                      width="16px"
                      fill="#e3e3e3"
                      className="mt-1"
                    >
                      <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="hidden md:flex flex-wrap md:gap-2 lg:gap-1 mt-9">
                <button className="text-gray-200 rounded-3xl bg-blue-400 flex px-5 py-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="mt-1"
                  >
                    <path
                      fill="#fafafa"
                      d="M8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm3.746 5.032c-.125.8-.66 4.217-.933 5.616-.116.61-.342.813-.56.833-.476.044-.838-.314-1.3-.617-.72-.471-1.127-.767-1.823-1.221-.808-.534-.284-.827.176-1.303.121-.124 2.226-2.043 2.267-2.217.005-.02.009-.093-.035-.132s-.107-.027-.152-.015c-.066.015-1.11.707-3.14 2.085-.298.202-.567.3-.807.295-.265-.005-.776-.149-1.155-.274-.467-.15-.838-.23-.805-.486.017-.134.2-.27.55-.41 2.127-.857 3.548-1.428 4.267-1.713 2.033-.81 2.45-.948 2.727-.948.06 0 .193.013.28.086.073.063.093.147.103.208.007.062.022.195.013.301z"
                    />
                  </svg>
                  <span className="px-2">Share</span>
                </button>
                <button className="text-gray-200 rounded-3xl bg-black flex px-5 py-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="mt-1"
                  >
                    <path
                      fill="#fafafa"
                      d="M17.9 3H21L13.4 10.9L22 21H15.6L10.2 14.8L4.9 21H1.7L9.8 12.5L1 3H7.6L12.5 8.7L17.9 3ZM16.8 19.4H18.7L6.1 4.5H4.1L16.8 19.4Z"
                    />
                  </svg>

                  <span className="px-2">Tweet</span>
                </button>
                <button className="text-gray-200 rounded-3xl bg-blue-600 flex px-5 py-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="mt-1"
                  >
                    <path
                      fill="#fafafa"
                      d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 5.994 4.388 10.973 10.125 11.927v-8.437H7.078V12h3.047V9.356c0-3.007 1.792-4.677 4.533-4.677 1.313 0 2.688.235 2.688.235v2.96H15.74c-1.49 0-1.953.925-1.953 1.874V12h3.328l-.532 3.563h-2.796v8.437C19.612 23.046 24 18.067 24 12.073z"
                    />
                  </svg>
                  <span className="px-2">Share</span>
                </button>
                <button className="text-gray-200 rounded-3xl bg-orange-600 flex px-5 py-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="mt-1"
                  >
                    <path
                      fill="#fafafa"
                      d="M24 12.3c0-2.1-1.8-3.8-3.9-3.8-.9 0-1.8.3-2.5.9-1.7-1.2-3.9-1.9-6.1-1.9l1.3-5.9 4.1.9a2 2 0 1 0 .1-1.1L12.3.2 10.8 6a10.4 10.4 0 0 0-6.2 2 4 4 0 0 0-2.5-.9A3.9 3.9 0 0 0 0 12.3c0 1.7 1 3.2 2.5 3.8a5.2 5.2 0 0 0 2 2.5c.1 2 1.7 3.7 3.8 3.7 1.2 0 2.3-.5 3.2-1.3a4.5 4.5 0 0 0 3.2 1.3c2.1 0 3.8-1.7 3.8-3.7a5.2 5.2 0 0 0 2-2.5c1.6-.6 2.5-2.1 2.5-3.8zM7.7 15.8a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm7.8 2.7c-.8.9-1.9 1.3-3 1.3s-2.2-.5-3-1.3a.6.6 0 0 1 0-.9c.2-.2.6-.2.8 0 .7.6 1.4.9 2.2.9.8 0 1.5-.3 2.2-.9.2-.2.6-.2.8 0 .2.2.2.6 0 .9zm-.1-4.5a1.8 1.8 0 1 1 3.6 0 1.8 1.8 0 0 1-3.6 0z"
                    />
                  </svg>
                </button>
                <button className="text-gray-200 rounded-3xl bg-lime-500 flex px-5 py-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16px"
                    viewBox="0 -960 960 960"
                    width="16px"
                    fill="#e3e3e3"
                    className="mt-1"
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
            <h3 className="text-gray-200 font-sans font-bold mb-2">
              Genres:{" "}
              <span className="text-gray-300 font-normal">
                {animeDetails.genres.map((gener) => gener.name).join(", ")}
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
