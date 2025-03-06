import http from "@/lib/axios";

export const login = async (values: { email?: string, password?: string }) => {
    try {
        const { data } = await http.post("/auth/login", values);
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const register = async (values: { email?: string, password?: string }) => {
    try {
        const { data } = await http.post("/auth/register", values);
        return data;
    } catch (err) {
        console.log(err);
    }
}