import styles from '@/app/page.module.css';
import { fetchVideoDetail } from '@/fetchFunc/fetchapi';
import Image from 'next/image';



export default async function VideoDetail({ id }: { id: string }) {
    const videoData = await fetchVideoDetail(id);
    return (
        <div className={styles.videoDetails}>
            <h2>{videoData.title}</h2>
            <div className={styles.videoChannel}>
                <Image className={styles.channelThumbnail} src={videoData.author.avatar[0].url} height={40} width={40} alt={videoData.author.title} />
                <div className={styles.channelName}>
                    <h3>{videoData.author.title}</h3>
                    <p>{videoData.author.stats.subscribersText}</p>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: videoData.description.substring(0, 100) + "..." }} className={styles.description}>
            </div>
        </div>
    )
}