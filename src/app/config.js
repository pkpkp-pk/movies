const TMDB_IMAGE_HOST = 'https://image.tmdb.org/t/p';

export const TMDB_API_HOST = 'https://api.themoviedb.org/3';

export const TMDB_IMAGE_URL = {
  small: `${TMDB_IMAGE_HOST}/w185`,
  medium: `${TMDB_IMAGE_HOST}/w300`,
  large: `${TMDB_IMAGE_HOST}/w1280`,
  original: `${TMDB_IMAGE_HOST}/original`
};

export const TMDB_MOVIES_TYPES = [
  { key: 'now_playing', value: 'Now playing' },
  { key: 'popular', value: 'Popular' },
  { key: 'top_rated', value: 'Top rated' },
  { key: 'upcoming', value: 'Upcoming' }
];