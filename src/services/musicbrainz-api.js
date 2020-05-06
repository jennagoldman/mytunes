export const fetchArtists = (searchQuery, offset) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchQuery}&fmt=json&limit=25&offset=${offset}`)
    .then(res => res.json())
    .then(json => json.artists.map(artist => ({
      artistId: artist.id,
      artistName: artist.name
    })));
};

export const fetchArtist = artistId => {
  return fetch(`https://musicbrainz.org/ws/2/artist/${artistId}?&fmt=json`)
    .then(res => res.json());
};

export const fetchReleases = artistId => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then(json => json.releases.map(release => ({
      releaseId: release.id,
      releaseTitle: release.title,
      coverArt: release['cover-art-archive'].front
    })));
};

export const fetchRelease = releaseId => {
  return fetch(`https://musicbrainz.org/ws/2/release/${releaseId}?&fmt=json`)
    .then(res => res.json());
};

export const fetchSongs = releaseId => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`)
    .then(res => res.json())
    .then(json => json.recordings);
};

