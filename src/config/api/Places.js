import axios from 'axios';

const get = params => (
  axios.get(`${process.env.API_MAPBOX}/${params.query}.json?types=address&access_token=${process.env.ACCESS_TOKEN_MAPBOX}`)
);

export default {
  get,
};
