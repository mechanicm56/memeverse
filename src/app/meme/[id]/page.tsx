import ImageCard from "@/components/MemeDetail";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Meme Details | Memeverse",
    description: "Details of Meme",
};

async function MemeDetails({ params }: {
    params: Promise<{ id?: string }>
}) {
    const { id } = await params;

    return (
        <>
            <ImageCard memeId={id} />
        </>
    )
}
export default MemeDetails;