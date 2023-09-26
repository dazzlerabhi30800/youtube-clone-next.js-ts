import { formatSeconds, formatViews } from '@/fetchFunc/fetchapi'
import styles from '@/app/page.module.css'
import Image from 'next/image'
import { VideoData } from '@/type'
import Link from 'next/link'


export default function VideoComp({ video }: { video: VideoData }) {
    return (
        <Link href={`/video/${video.video.videoId}`}>
            <div className={styles.video}>
                <Image loading='lazy' className={styles.thumbnail} src={video.video.thumbnails[0]?.url} width={300} height={165} quality={100} alt="Despacito" />
                <div className={styles.videoInfo}>
                    {/* Channel Info */}
                    <div className={styles.channelInfo}>
                        <Image src={video.video.author.avatar[0].url} width={40} height={40} alt='Louis Fonsi' />
                        <div className={styles.authorInfo}>
                            <p>{video.video.title}</p>
                            <p>{video.video.author.title}</p>
                            <div className={styles.timeInfo}>
                                <span>{formatViews(video.video.stats.views)}</span>
                                {video.video.stats.views && video.video.publishedTimeText &&
                                    <span className={styles.separator}></span>
                                }
                                <span>{video.video.publishedTimeText}</span>
                            </div>
                        </div>
                    </div>
                    {/* Video Length */}
                    <div className={styles.videoLength}>{formatSeconds(video.video.lengthSeconds)}</div>
                </div>
            </div>
        </Link>
    )
}