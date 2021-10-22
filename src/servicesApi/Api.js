import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23250657-60999439b4e5e927be309f9a4';


axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchPixabayImgs = async ({ q, page }) => {
  return await axios.get('', { params: { q, page } });
};

export default { fetchPixabayImgs };