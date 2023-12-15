import axios from 'axios';
import { BASE_URL } from '../constants/apiUrl';

axios.defaults.baseURL = BASE_URL;

export default async function getData(url) {
  try {
    const response = await axios.get(`${url}`);
    return response.data;
  } catch (e) {
    throw Error(`getData에서 ${e} 발생`);
  }
}
