const apiKey = process.env.REACT_APP_API_KEY;

const returnApiUrl = () => {
  return `http://ws.audioscrobbler.com/2.0/?api_key=${apiKey}&`;
};

export const getAlbums = async (album) => {
  const ALBUMS_LIMIT = 20;

  try {
    const params = new URLSearchParams({
      method: "album.search",
      format: "json",
      album,
    });

    const response = await fetch(`${returnApiUrl()}${params.toString()}`);
    const data = await response.json();

    return data.results.albummatches.album.slice(0, ALBUMS_LIMIT);
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

    const response = await fetch(`${returnApiUrl()}${params.toString()}`);
    const data = await response.json();

    return data.album;
  } catch (error) {
    throw error;
  }
};
