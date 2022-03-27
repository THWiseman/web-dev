import React from "react";
let WhoToFollowListItem = (
    {
        who = {
            "avatarIcon":"../../../images/nasa.png",
            "userName": "Nasa",
            "handle": "NASA"
        }
    }
)  => {
    return (
        <div>
                    <div className = "row">
                    <div className="col-sm-2">
                        <img className="img-fluid img-rounded float-right pt-2" src={who.avatarIcon} alt=""/>
                    </div>
                    <div className="col-sm-6 pt-2">
                        <div className="author">{who.userName}<i className="fa-solid fa-circle-check"></i></div>
                        <div>{who.handle}</div>
                    </div>
                    <div className="col-4 pt-2">
                        <button type="button" className="btn btn-primary">Follow</button>
                    </div>
                    </div>
        </div>)
};
export default WhoToFollowListItem;