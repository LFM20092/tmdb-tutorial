import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGY5Njg1MzA0ODNiYWUxOWQyZDRjMzU0NDRhZWJkYyIsIm5iZiI6MTc2MTA1NDAzNC40MjMsInN1YiI6IjY4Zjc4ZDUyN2IwMGFhZTNmNjhmOGU3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0JIWbuNfiaQBMl5G3qa7KgrIc2eC9SMEVB5nPfI-4UU`,
  },
});

export default api;
