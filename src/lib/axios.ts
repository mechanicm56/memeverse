import axios from "axios";
import { jwtDecode } from "jwt-decode";


export const BASE_URL = process.env.API_URL ?? 'http://localhost:5000/api';

const http = axios.create({
    baseURL: BASE_URL
})

http.interceptors.request.use(
    async (config) => {
        // const currentDate = new Date();
        if (window.localStorage.getItem("uxairishere")) {
            try {
                const current_user = window.localStorage.getItem("uxairishere");
                if (current_user) {
                    const user = JSON.parse(current_user);
                    const decodedToken: any = jwtDecode(user?.accessToken);
                    // if (decodedToken.exp * 1000 < currentDate.getTime()) {
                    //     config.headers["authorization"] = "Bearer " + user?.accessToken;
                    // }
                    config.headers["authorization"] = "Bearer " + user?.accessToken
                }
            } catch (error) {
                console.error("Error parsing user from localStorage:", error);
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


http.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error?.response?.status === 401) {
            // handle 401 error here
            if (window.localStorage.getItem("uxairishere")) {
                try {
                    const current_user = window.localStorage.getItem("uxairishere");
                    const user = JSON.parse(current_user);
                    if (current_user && user?.accessToken) {
                        const { data } = await axios.post(`${BASE_URL}/auth/token`, { token: user?.refreshToken });
                        const newData = {
                            ...user,
                            accessToken: data?.accessToken,
                            refreshToken: user?.refreshToken
                        };
                        window.localStorage.setItem("uxairishere", JSON.stringify(newData));
                    }
                } catch (error) {
                    console.error("Error parsing user from localStorage:", error);
                }
            }
        }
        return Promise.reject(error);
    }
);

export default http;
