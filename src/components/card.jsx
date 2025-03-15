import React from "react";

export const Card = ({ anime, width = "w-auto", ...props }) => {
  return (
    <div
      className={`${width} max-w-44 h-[14.5rem] bg-gray-600 rounded-2xl shadow-lg overflow-hidden flex-none snap-start flex flex-col justify-between`}
      key={anime.mal_id}
      {...props}
    >
      <img
        src={anime.images.jpg.image_url}
        alt={anime.title}
        className="w-full h-48 object-cover"
      />
      <div className="m-auto w-full px-4">
        <h3 className="font-semibold text-sm text-gray-200 line-clamp-2 overflow-hidden">
          {anime.title || anime.title_english}
        </h3>
      </div>
    </div>
  );
};
