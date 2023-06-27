const returnTracks = (tracks) => {
  if (!tracks) return;

  let tracksString = "";

  tracks.map((track) => {
    tracksString = tracksString + track.name + " • ";
  });

  return tracksString;
};

export default returnTracks;
