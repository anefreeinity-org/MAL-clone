const handleAnimeDetails = (name, id, navigate) => {
  const route = `${name}-${id}`;
  navigate(`/${route}`);
};

export default handleAnimeDetails;
