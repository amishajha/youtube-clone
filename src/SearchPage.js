import React from 'react'
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import "./SearchPage.css"
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
function SearchPage() {
    return (
        <div className="searchPage">
           <div className="searchPage__filter">
               <TuneOutlinedIcon/>
               <h2>Filter</h2>
               </div> 
               <hr/>
               <ChannelRow
               image="https://yt3.ggpht.com/yti/ANoDKi7wIYyc0_GV0ZIoLwTQ94EVnaz9D5RNWhbj6eIifA=s88-c-k-c0x00ffffff-no-rj-mo"
               channel="Amisha Jha"
               verified
               subs="100k"
               noofVideos={382}
               description="awesome web development courses"/>
   <hr/> 
   <VideoRow
   views="10k"
   subs="659k"
   description="do you want free course"
   timestamp="59 seconds ago"
   channel="Amisha Jha"
   title="lets build youtube clone"
   image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXw0tU_gWd9939AUcUScOZEVJW9ZlMaSI2Q&usqp=CAU"/>
        </div>
    )
}

export default SearchPage
