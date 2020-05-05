export const fetchArtists = searchQuery => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchQuery}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(json => json.artists);
};
