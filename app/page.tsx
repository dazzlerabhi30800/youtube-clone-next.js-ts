import { fetchFunc } from '@/fetchFunc/fetchapi'
import styles from './page.module.css'
import VideoComp from '@/Components/VideoComp'
import { VideoData } from '@/type';

export default async function Home() {
  let data = await fetchFunc("search/?q=new&hl=en&gl=US");
  return (
    <div className={styles.videoWrapper}>
      {data.map((vid: VideoData, index: number) => {
        if (vid.type !== "video") return;
        return <VideoComp key={index} video={vid} />
      })}
    </div>
  )
}

