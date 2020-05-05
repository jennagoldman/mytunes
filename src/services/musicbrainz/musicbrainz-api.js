export const fetchArtists = (searchQuery, offset) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchQuery}&fmt=json&limit=25&offset=${offset}`)
    .then(res => res.json())
    .then(json => json.artists);
};

export const fetchArtist = artistId => {
  return fetch(`https://musicbrainz.org/ws/2/artist/${artistId}?&fmt=json`)
    .then(res => res.json());
};

export const fetchArtistReleases = artistId => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then(json => json.releases);
};

