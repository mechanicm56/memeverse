import http from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const getProfile = async (email?: string) => {
    const config = {
        params: {
            email
        }
    }
    const { data } = await http.get(`/user/get-account-data`, config);
    return data?.user;
}

export const useProfile = (email?:string) => {
    return useQuery({
        queryKey: ['profile', email],
        queryFn: () => getProfile(email)
    });
}


export const getUserRatings = async () => {
    const { data } = await http.get(`/user/ratings`);
    return data;
}

export const useUserRatings = () => {
    return useQuery({
        queryKey: ['user-ratings'],
        queryFn: getUserRatings
    });
}