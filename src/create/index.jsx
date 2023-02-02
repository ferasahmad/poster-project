import { useLocation } from "react-router-dom";

const Create = () => {
  const location = useLocation();
  const { albums } = location.state;

  console.log(albums);

  return (
    <p>
      {/* {albums.map((album) => (
        <img
          src={album.image[3].#text}
          alt=""
          style={{ height: "40px", width: "40px" }}
        />
      ))} */}
    </p>
  );
};

export default Create;
