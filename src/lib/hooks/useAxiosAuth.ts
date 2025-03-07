import { jwtDecode} from "jwt-decode";
import { useAuth } from '@/context/AuthUserContext';
import { refreshToken } from './useRefreshAuth';
import http from "../axios";


export const useAxiosAuth = () => {
const { user, setUser } = useAuth();
http.interceptors.request.use(
    async (config) => {
        const currentDate = new Date();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const decodedToken: any = jwtDecode(user.accessToken);
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
            const data = await refreshToken(user, setUser);
            config.headers["authorization"] = "Bearer " + data.accessToken;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

return http;

}