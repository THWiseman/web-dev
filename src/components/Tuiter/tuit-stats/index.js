import React from 'react'
import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions"

const TuitStats = (tuit) => {
    const dispatch = useDispatch();
    return (
           <div>
     Likes: {tuit.likes}
               <i onClick={() => updateTuit(dispatch, {
                   ...tuit,
               likes : tuit.likes + 1})
               } className="far fa-thumbs-up ms-2"></i>
               Dislikes: {tuit.dislikes}
               <i onClick={() => updateTuit(dispatch, {
                   ...tuit,
                   dislikes : tuit.dislikes + 1})
               } className="far fa-thumbs-down ms-2"></i>
        </div>);
}
export default TuitStats;