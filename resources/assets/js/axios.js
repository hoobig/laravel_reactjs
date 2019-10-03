import axios from 'axios';
import { BASE_URL, X_CSRF_TOKEN } from './constants';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});