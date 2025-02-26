export const SeasonalAnime = () => {
  const seasonalAnime = [
    "Blue Box",
    "One Piece",
    "Solo Leveling",
    "Apothecary Diary",
    "Ruronei Kenshi",
    "Rezero",
    "Dr Stone",
    "Sakamoto Days",
  ];
  return (
    <div className="text-gray-200 px-4 flex gap-4 justify-self-start overflow-x-auto whitespace-nowrap max-w-full scrollbar-hide">
      {seasonalAnime.map((anime, index) => (
        <div
          key={index}
          className="w-48 h-48 bg-gray-900 rounded-xl p-4 flex-shrink-0"
        >
          {anime}
        </div>
      ))}
    </div>
  );
};
