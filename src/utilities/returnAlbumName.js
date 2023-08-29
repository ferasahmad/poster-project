const returnAlbumName = (albumName, charLimit = 30) => {
  if (!albumName) return;

  if (albumName.length < charLimit) return <h1>{albumName}</h1>;
};

export default returnAlbumName;
