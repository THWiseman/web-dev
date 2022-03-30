import React from "react";
import Index from "../navigation-sidebar";
import ExploreComponent from "./explore-component";
import WhoToFollowList from "../who-to-follow-list/who-to-follow-list";
import posts from "../post-summary-list/posts.json"
import array from "../data/who.json"
import './explore-component.css'

const ExploreScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <Index active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ExploreComponent posts={posts}/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList who={array}/>
            </div>
        </div>
    );
};
export default ExploreScreen;
