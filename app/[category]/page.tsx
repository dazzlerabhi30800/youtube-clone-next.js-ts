import { fetchFunc } from "@/fetchFunc/fetchapi";
import styles from '@/app/page.module.css';
import { VideoData } from "@/type";
import VideoComp from "@/Components/VideoComp";

export default async function Category({ params: { category } }: { params: { category: string } }) {
    const searchRegex = /%\d{1,2}/g;
    const formatedParams = category.replace(searchRegex, " ");
    let data = await fetchFunc(`search/?q=${formatedParams}&hl=en&gl=US`);
    return (
        <div className={styles.videoWrapper}>
            {data.map((vid: VideoData, index: number) => {
                if (vid.type !== "video") return;
                return <VideoComp key={index} video={vid} />
            })}
        </div>
    )
}