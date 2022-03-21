import PostSummaryItem from "./PostSummaryItem.js"
import React from "react";

const PostSummaryList = ({posts}) =>
    {
        return (
            <div className="feed">
                {posts.map(post => {
            return(
                <PostSummaryItem post={post}/>
                );})}</div>)
    }
export default PostSummaryList;