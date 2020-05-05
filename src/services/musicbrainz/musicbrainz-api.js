export const fetchArtists = (searchQuery, offset) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchQuery}&fmt=json&limit=25&offset=${offset}`)
    .then(res => res.json())
    .then(json => json.artists);
};

// export const fetchArtistsWithOffset = (searchQuery, offset) => {
//   return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchQuery}&fmt=json&limit=25&offset=${offset}`)
//     .then(res => res.json())
//     .then(json => json.artists);
// };

