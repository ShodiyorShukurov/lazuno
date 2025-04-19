import axios from 'axios';
import { API_PATH } from '../utils/constants';

const Api = axios.create({
  baseURL: API_PATH,
});

export default Api;
