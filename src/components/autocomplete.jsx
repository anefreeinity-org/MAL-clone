import { useState, useRef, useEffect } from "react";
import { JikanService } from "../services/jikan-service";
import useDebounce from "../pages/utilities/use-debounce";
import { useNavigate } from "react-router-dom";
import handleAnimeDetails from "../pages/utilities/handle-anime-details";

const Autocomplete = () => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef(null);
  const jikenService = new JikanService();
  const debounceTimeout = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const userInput = e.target.value;
    setQuery(userInput);

    if (userInput.trim() === "") {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    useDebounce(debounceTimeout, () => fetchSearchAnime(userInput), 400);
  };

  const fetchSearchAnime = async (userInput) => {
    try {
      const response = await jikenService.searchAnime(userInput);
      setFilteredSuggestions(response.data);
      setShowSuggestions(response.data.length > 0);
    } catch (error) {
      console.error("Error searching anime:", error);
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSelect = (suggestion) => {
    setQuery(suggestion.title);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    handleAnimeDetails(
      suggestion.title || suggestion.title_english,
      suggestion.mal_id,
      navigate
    );
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      <input
        type="text"
        className="w-full px-3 py-3 border border-gray-400 rounded-2xl shadow-sm bg-slate-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      {showSuggestions && (
        <ul className="absolute max-h-[calc(100vh*0.7)] overflow-y-auto left-0 right-0 mt-2 bg-gray-800 border border-slate-700 rounded-xl shadow-lg">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className={`px-2 py-2 cursor-pointer flex items-center gap-2 ${
                index === 0 && "rounded-t-xl"
              } ${
                index === filteredSuggestions.length - 1 && "rounded-b-xl"
              } hover:bg-gray-700`}
              onClick={() => handleSelect(suggestion)}
            >
              <img
                className="rounded-lg w-10 h-10 md:w-12 md:h-12"
                src={suggestion.images.jpg.small_image_url}
                alt="mal_image"
              ></img>
              <p>{suggestion.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
