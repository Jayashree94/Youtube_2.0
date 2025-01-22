import React, { useEffect } from 'react'
import { YOUTUBE_API } from '../utils/constants'

const VideosContainer = () => {
    useEffect(() => {
        getVideos();     
        },[]);

    const getVideos= async()=>{
        const data = await fetch(YOUTUBE_API);
        const videos = await data.json();
        console.log(videos);
    }
  return (
    <div>VideosContainer</div>
  )
}

export default VideosContainer