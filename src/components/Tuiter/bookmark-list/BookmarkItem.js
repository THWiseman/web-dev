import React from 'react'

const BookmarkItem = ( param = {"name": "Robert Zubrin", "handle": "@RobertZubrin", "imgPath":"../../cat.jpeg","profilePicPath":"../../IMG_5489.jpeg", "date":"12/14/2021", "numComments": "11", "numRetweets": "22", "numLike": "100", "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "imgHeading":"Black cats are spooky, oh so spooky.", "imgBody":"I have never been more spooked in my entire life"},) => {
    return (
        <>
            <div className="container wd-container">
    <div className = "wd-bookmark">
        <div className="row">
            <div className="col">

                    <div className = "wd-avatar"><p><img src={param.profilePicPath} alt="React Logo" width="48" height="48"/></p> </div>
                    <div className = "wd-content">
                        <div className="wd-person">
                            <div className = "wd-name">{param.name}</div>
                            <div className = "wd-handle">{param.handle} &#183;{param.date}</div>
                         </div>
                    </div>

            </div>
        </div>

        <div className = "row">
            <div className = "col">
                <p> {param.body}</p>
            </div>
        </div>

        <div className="row">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active specialrow">
                        <img className="d-block w-100" src={param.imgPath} alt="First slide"/>
                        <p className="carousel-caption text-start specialrow2 w-100"><span id="carouselheadline"> {param.imgHeading}.</span><br/><span id="carouseltext">{param.imgBody}</span></p>
                        <p className="carousel-caption text-start"> </p>
                    </div>
                </div>
            </div>




            <div className="col">
                <span className = "wd-comment">&#x1F5E8; {param.numComments}</span>
                <span className = "wd-comment">&#x267C; {param.numRetweets}</span>
                <span className = "wd-comment">&#x1F496; {param.numLike}</span>
                <span className = "wd-comment">&#x23EB;</span>
            </div>
        </div>

    </div>
            </div>
    </>
        );
}
export default BookmarkItem;
