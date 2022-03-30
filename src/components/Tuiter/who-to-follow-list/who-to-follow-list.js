import React from 'react'
import WhoToFollowListItem from "./who-to-follow-list-item"
import {useSelector} from "react-redux";

const WhoToFollowList = () =>
    {
        const who = useSelector(state => state.who);
        return (
            <span className="follow">
            {who.map(who => {
            return(
                <WhoToFollowListItem who={who}/>
            );
        })}</span>)
    }

//     let whoToFollow = ``;
//     for(let i = 0; i < who.length; i++){
//         whoToFollow += WhoToFollowListItem(who[i]);
//     }
//     return (
//         <div>
//             <div className="container-fluid pt-4" id="follow">
//                 <div className = "row" id="toprow">
//                     <div className="col-sm-12" id="whoToFollow">
//                         Who to follow
//                     </div>
//                 </div>
//             {whoToFollow}
//             </div>
//         </div>
// ); }

export default WhoToFollowList
