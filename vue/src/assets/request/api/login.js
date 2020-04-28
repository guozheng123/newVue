import axios from '../http';

const login = {
    go (opt) {
        return axios.post('/api/login', opt);
    }
}

export default login;