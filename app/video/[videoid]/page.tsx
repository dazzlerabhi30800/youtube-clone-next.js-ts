"use client";
import ReactPlayer from 'react-player';
import React, { useState, useEffect } from 'react';
import styles from '@/app/page.module.css';


function VideoPlayer({ params: { videoid } }: { params: { videoid: string } }) {
    const [client, setClient] = useState(false);
    useEffect(() => {
        setClient(true);
    }, [])

    return (
        <div className={styles.videoPlayerWrapper}>
            {client &&
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoid}`}
                    className="videoPlayer"
                    width="70%"
                    height="600px"
                    config={{
                        youtube: {
                            playerVars: { showinfo: 1 },
                        },
                    }}
                    controls={true}
                    playing={false}
                    style={{ backgroundColor: "#000", width: "100%" }}
                />
            }
        </div>
    )
}


export default VideoPlayer;