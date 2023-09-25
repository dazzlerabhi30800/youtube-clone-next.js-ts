export interface VideoData {
    // map(arg0: (video: any, index: any) => import("react").JSX.Element): import("react").ReactNode
    type: string,
    video: video,
}



export type video = {
    author: any,
    badges: any[],
    descriptionSnippet: string,
    isLiveNow: boolean,
    lengthSeconds: 282,
    movingThumnails: any[]
    publishedTimeText: string,
    stats: {
        views: number,
    },
    thumbnails: any[],
    title: string,
    videoId: string,
}