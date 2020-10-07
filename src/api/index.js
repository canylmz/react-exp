import axios from 'axios';

const apiUrl = 'https://covid19.mathdro.id/api';

export default axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});
