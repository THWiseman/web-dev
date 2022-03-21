import React from 'react'
import PostSummaryList from "../post-summary-list/PostSummaryList";

const ExploreComponent = ({posts}) =>
{
    return (
        <React.Fragment>
        <div className="container-fluid">
            <div className="row">
            <div className="input-group mb-3" id="test">
                <input type="text" className="form-control" id="searchbar" aria-describedby="basic-addon3" placeholder="&#x1F50D;   Search Tuiter"/>
                <div className="input-group-append" id="gearappend">
                    <span className="input-group-text" id="gearbackground"> <span id="gear">
                    <i className="fa-solid fa-gear id=gearGlyph"></i>
                </span></span>
                </div>
            </div>
            </div>
           <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <span className="nav-link active">For You</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link">Trending</span>
                </li>
                <li className="nav-item">
                    <span  className="nav-link">News</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link">Sports</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link">Entertainment</span>
                </li>
           </ul>
               <div className="row">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="../../cat.jpeg" alt="First slide"/>
                                <p className="carousel-caption text-start"><span id="carouselheadline"> Black cats are spooky.</span><br/><span id="carouseltext">Very spooky.</span></p>
                                <p className="carousel-caption text-start"> </p>
                            </div>
                        </div>
                </div>
                </div>
           <PostSummaryList posts = {posts}/>
           </div>
        </React.Fragment>
        );
}
export default ExploreComponent;
