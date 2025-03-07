export type MemeType = {
    _id?: string
    name?: string
    url: string
    height?: number
    width?: number
    likes?: number
    like?: string
    comments?: {
        content?: string
        createdAt?: string
        user?: {
            name?: string;
            email?: string
        }
    }[]
}
