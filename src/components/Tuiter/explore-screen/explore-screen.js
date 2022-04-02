import React from "react";
import ExploreComponent from "./explore-component";
import posts from "../post-summary-list/posts.json"
import './explore-component.css'

const ExploreScreen = () => {
    return(
        <div className="row mt-2">
            {/*<div className="col-2 col-md-2 col-lg-1 col-xl-2">*/}
            {/*    <Index active="explore"/>*/}
            {/*</div>*/}
            <div className="col-12 "
                 style={{"position": "relative"}}>
                <ExploreComponent posts={posts}/>
            </div>
            {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
            {/*    <WhoToFollowList who={array}/>*/}
            {/*</div>*/}
        </div>
    );
};
export default ExploreScreen;
