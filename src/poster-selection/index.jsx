import Header from "../components/header";

const PosterSelection = () => {
  const artist = new URLSearchParams(window.location.search).get("artist");
  const album = new URLSearchParams(window.location.search).get("album");

  return (
    <>
      <Header />
      <p>
        {artist} {album}
      </p>
    </>
  );
};

export default PosterSelection;
