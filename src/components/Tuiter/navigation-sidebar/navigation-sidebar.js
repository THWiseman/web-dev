import React from "react";
import {Link} from "react-router-dom";
const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
        <div>
            <div className="list-group">
                <Link to="/" className="list-group-item">
                    <i className="fab fa-twitter"/>
                </Link>
                <Link to="/Tuiter/Home"  className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                <i className="fa-solid fa-house-chimney"></i><span className="d-none d-xl-inline-block"> Home</span>
                </Link>
                <Link to="/Tuiter/Explore" className={"list-group-item"}>
                    <i className="fa-solid fa-hashtag"></i>   <span className="d-none d-xl-inline-block"> Explore</span>
                </Link>
                <a href="../notifications.html" className="list-group-item list-group-item-action">
                    <i className="fa-solid fa-bell"></i>   <span className="d-none d-xl-inline-block"> Notifications</span></a>
                <a href="../messages.html" className="list-group-item list-group-item-action" tabIndex="-1" aria-disabled="true">
                    <i className="fa-solid fa-envelope"></i>    <span className="d-none d-xl-inline-block"> Messages</span></a>
                <a href="../bookmarks.html" className="list-group-item list-group-item-action" tabIndex="-1" aria-disabled="true">
                    <i className="fa-solid fa-bookmark"></i>    <span className="d-none d-xl-inline-block"> Bookmarks</span></a>
                <a href="../lists.html" className="list-group-item list-group-item-action" tabIndex="-1" aria-disabled="true">
                    <i className="fa-solid fa-list"></i>   <span className="d-none d-xl-inline-block"> Lists</span></a>
                <a href="../profile.html" className="list-group-item list-group-item-action" tabIndex="-1" aria-disabled="true">
                    <i className="fa-solid fa-user"></i>    <span className="d-none d-xl-inline-block"> Profile</span></a>
                <a href="../navigation.html" className="list-group-item list-group-item-action" tabIndex="-1" aria-disabled="true">
                    <i className="fa-solid fa-ellipsis"></i>
                    <span className="d-none d-xl-inline-block"> More</span></a>
            </div>
            <div className="d-grid mt-2">
                <a href="../tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </div>
    );
}
export default NavigationSidebar;
