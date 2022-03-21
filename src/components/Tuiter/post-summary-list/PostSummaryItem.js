import React from 'react'

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../images/react-blue.png"
        }
    }) =>
{
    return (
        <div>
    <div className = {"row"}>
        <div className="col-8 themed-grid-col">
            <div className="topic">{post.topic}</div>
            <div className="author">{post.userName} <i className="fa-solid fa-circle-check"></i> <span className="time">{post.time}</span></div>
            <div className="tweetbody">{post.title}</div>
            <div className="time">{post.tweets} tweets</div>
        </div>
        <div className="col-4">
            <img className="img-responsive" src={post.image} alt="Responsive image" height="100px"/>
        </div>
    </div>
        </div>
    )
};

export default PostSummaryItem;