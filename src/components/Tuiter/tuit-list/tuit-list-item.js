import React from 'react'
import {useDispatch} from "react-redux"
import TuitStats from '../tuit-stats'
import {deleteTuit} from "../actions/tuits-actions";

const TuitListItem = (tuitProp) => {
    const {tuit} = tuitProp;

    const dispatch = useDispatch();
    // const deleteTuit = (tuit) => {
    //     dispatch({type: 'delete-tuit', tuit})
    // };

    return (
        <div>
            <div className={"row tuit"}>
                <div className="col-3">
                    <img className="img-responsive" src={tuit["logo-image"]} height="100px" alt=""/>
                </div>
                <div className="col-9">
                    <div><span
                        className="author"> {tuit["postedBy"] && tuit["postedBy"].hasOwnProperty("username") && tuit["postedBy"]["username"]} </span>
                        <span className="topic"> @{tuit["handle"]}</span><i className="fa-solid fa-circle-check"></i>
                        {/*<i id={"color-me-white"} onClick={() => deleteTuit(tuit)} className="fas fa-remove fa-2x fa-pull-right"></i>*/}
                        <i id={"color-me-white"} className="fas fa-remove float-end fa-2x"
                           onClick={() => deleteTuit(dispatch, tuit)}></i></div>
                    <div className="tweetbody">{tuit["tuit"]}</div>
                    <div className="socialBar">
                        <span
                            className="wd-comment">&#x1F5E8; {tuit["stats"] && tuit["stats"].hasOwnProperty("comments") && tuit["stats"]["comments"]}</span>
                        <span
                            className="wd-comment">&#x267C; {tuit["stats"] && tuit["stats"].hasOwnProperty("retuits") && tuit["stats"]["retuits"]}</span>
                        <span className="wd-comment"><TuitStats {...tuit}/></span>
                        <span className="wd-comment">&#x23EB;</span></div>
                </div>
            </div>
        </div>
    )
}

export default TuitListItem;