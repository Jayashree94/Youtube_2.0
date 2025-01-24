import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard, {AdVideoCard} from './VideoCard';
import { Link } from 'react-router-dom';
const VideosContainer = () => {

    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos();     
        },[]);

    const getVideos = async() =>{
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        //console.log(json.items);
        setVideos(json.items);


    }

    
  return (

    <div className='flex flex-wrap'>
        <AdVideoCard info={videos[48]}></AdVideoCard>
        {videos.map((video) => (<Link to={"/watch?v=" +video.id} > <VideoCard key={video.id} info={video}/></Link>))}
    </div>
  )
}

export default VideosContainer