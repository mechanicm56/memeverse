import http from "@/lib/axios";

export const getMemes = async () => {
    const { data } = await http.get('meme');
    return data;
}