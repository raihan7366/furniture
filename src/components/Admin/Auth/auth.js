import axios from 'axios';
// const SERVER_URL = "http://localhost/react_api";

const login = async (data) => {
    // const LOGIN_ENDPOINT = `${SERVER_URL}/login.php`;
    const LOGIN_ENDPOINT = `${global.config.apiUrl}/auth/login`;
    try {
        let response = await axios.post(LOGIN_ENDPOINT, data);
        console.log(response.data)
        if (response.data.data.jwt) {
            localStorage.setItem("access_token", response.data.data.jwt);
            localStorage.setItem("userdata", response.data.data.datas);
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
        console.log(e);
    }
}

const register = async (data) => {
    // const SIGNUP_ENDPOINT = `${SERVER_URL}/register.php`;
    const SIGNUP_ENDPOINT = `${global.config.apiUrl}/auth/register`;
    try {
        let response = await axios({
            method: 'post',
            responseType: 'json',
            url: SIGNUP_ENDPOINT,
            data: data
        });
        console.log(response);
    } catch (e) {
        console.log(e);
    }
}

const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("userdata");
}

export { login, register, logout } 