const returnAlbumName = (albumName) => {
  if (!albumName) return;

  if (albumName.length < 30) return <h1>{albumName}</h1>;
};

export default returnAlbumName;
