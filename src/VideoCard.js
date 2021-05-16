import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css"
function VideoCard({image,title,channel,views,timestamp,channelImage}) {
    return (
        <div className="videocard">
         <img className="videoCard__thumbnail"src={channelImage} alt=""/>
         <div className="videoCard__info">
          <Avatar className="videoCard__avatar" alt={channel} src={image}/> 
        <div className="video__text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
                {views}.{timestamp}
            </p>

        </div>
        
         </div>
        </div>
    )
}

export default VideoCard
