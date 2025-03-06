import http from "@/lib/axios";
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

export const getMemes = async (queryParams?: any) => {
    const [ , search, category, sortby ] = queryParams.queryKey;
    const config = {
        params: {
            search,
            category, 
            sortby
        }
    }
    const { data } = await http.get('meme', config);
    return data;
}

export const useMemes = (search?: string, category?: string, sortby?: string) => {
    return useInfiniteQuery({
        initialPageParam: '',
        queryKey: ['memes', search, category, sortby],
        queryFn: getMemes,
        getNextPageParam: (lastPage) => lastPage?.paging?.hasMore && lastPage.paging.next,
    })
}


export const getLikesMemes = async (queryParams?: any) => {
    const [ , id] = queryParams.queryKey;
    const config = {
        params: {
            id,
            next: queryParams.pageParam
        }
    }
    const { data } = await http.get('/user/liked_memes', config);
    return data;
}

export const useLikedMemes = (id?: string) => {
    return useInfiniteQuery({
        initialPageParam: '',
        queryKey: ['liked-memes', id],
        queryFn: getLikesMemes,
        getNextPageParam: (lastPage) => lastPage?.paging?.hasMore && lastPage.paging.next,
    })
}


export const getUserMemes = async (queryParams?: any) => {
    const [ , id] = queryParams.queryKey;
    const config = {
        params: {
            userId: id,
            next: queryParams.pageParam
        }
    }
    const { data } = await http.get('/user/memes', config);
    return data;
}

export const useUserMemes = (id?: string) => {
    return useInfiniteQuery({
        initialPageParam: '',
        queryKey: ['user-memes', id],
        queryFn: getUserMemes,
        getNextPageParam: (lastPage) => lastPage?.paging?.hasMore && lastPage.paging.next,
    })
}

export const getMeme = async (id?: string) => {
    const { data } = await http.get(`/meme/post/${id}`);
    return data;
}

export const useMeme = (id?:string) => {
    return useQuery({
        queryKey: [`meme-${id}`, id],
        queryFn: () => getMeme(id)
    });
}

export const getMostLikedMemes = async () => {
    const { data } = await http.get(`/meme/most-liked`);
    return data;
}

export const useMostLikedMemes = () => {
    return useQuery({
        queryKey: ['most-liked-memes'],
        queryFn: getMostLikedMemes
    });
}

export const postMeme = async (values?: any) => {
    const { data } = await http.post(`/meme`, values);
    return data;
}

export const likeMeme = async (id?: string, values?: any) => {
    const { data } = await http.post(`/meme/like/${id}`, values);
    return data;
}

export const postComment = async (id?: string, values?: string) => {
    const { data } = await http.post(`/meme/comment/${id}`, values);
    return data;
}


export const updateProfile = async (id?: string, values?: any) => {
    const { data } = await http.patch(`/user/update-account/${id}`, values);
    return data;
}