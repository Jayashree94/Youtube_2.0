import React from 'react'

const VideoCard = ({info}) => {
    console.log(info)
    const { snippet, statistics} = info;
    const {thumbnails, channelTitle} = snippet;
   
return( <div className='p-2 m-2 w-72 shadow-lg'> 
    <img className='rounded-lg'src={thumbnails?.medium?.url} alt="thumbnail"></img>
    <div className='font-bold py-2'>{channelTitle}</div>
    <div> Views : {statistics.viewCount}</div>
</div>
    
);
}

export default VideoCard;