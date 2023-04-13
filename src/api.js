const apiKey = process.env.REACT_APP_API_KEY;

const returnApiUrl = () => {
  return `http://ws.audioscrobbler.com/2.0/?api_key=${apiKey}&`;
};

const request = async (params) => {
  try {
    const response = await fetch(returnApiUrl() + params.toString());
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getAlbums = async (album) => {
  const ALBUMS_LIMIT = 20;

  try {
    const params = new URLSearchParams({
      method: "album.search",
      format: "json",
      album,
    });

    const { results } = await request(params);
    const albums = transformAlbumsArray(results.albummatches.album);

    return albums.slice(0, ALBUMS_LIMIT);
  } catch (error) {
    throw error;
  }
};

export const getAlbum = async (artist, album) => {
  try {
    const params = new URLSearchParams({
      method: "album.getInfo",
      format: "json",
      artist,
      album,
    });

    const data = await request(params);
    const albumData = transformAlbumObject(data.album);

    return albumData;
  } catch (error) {
    throw error;
  }
};

const getAlbumCoverFromImageArray = (imagesArray) => {
  return imagesArray[imagesArray.length - 1]["#text"];
};

const transformAlbumsArray = (albums) => {
  let newAlbums = [];

  albums.map((album) => {
    newAlbums.push({
      name: album.name,
      artist: album.artist,
      image: getAlbumCoverFromImageArray(album.image),
    });
  });

  return newAlbums;
};

const transformAlbumObject = (albumInfo) => {
  const albumTracks = albumInfo.tracks.track;
  let newAlbumTracks = [];
  let albumCover = "";

  newAlbumTracks = albumTracks.map((track) => {
    return {
      name: track.name,
      duration: track.duration,
    };
  });

  return {
    name: albumInfo.name,
    artist: albumInfo.artist,
    tracks: newAlbumTracks,
    image: getAlbumCoverFromImageArray(albumInfo.image),
    // releaseDate: albumInfo.wiki.published.split(",")[0],
  };
};
