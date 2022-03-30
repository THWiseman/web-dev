import React, {useState} from 'react'
import {useSelector} from "react-redux";
import "./profile.css"
import EditProfile from "../edit-profile"

let editingProfile = false;

const Profile = () => {
    const profileData = useSelector(
        state => state.profile);

    const [editingProfile, setEditingProfile] = React.useState(false);
    const setEditFn = (editing) => { setEditingProfile(editing);};
    if(editingProfile){
        return(<EditProfile setEditFn={setEditFn}/>)
    } else {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"bannerImage"}>
                        <img className="img-responsive" src={profileData["bannerPicture"]} height="200px" width={"100%"} alt=""/>
                    </div>
                    <div>
                        <img className="img-responsive" src={profileData["profilePicture"]} height="100px" width={"100px"} border-radius={"50px"} alt=""/>
                    </div>
                    <div className={"myName"}>
                        {profileData.firstName + " " + profileData["lastName"]}
                    </div>
                    <div className={"handle"}>
                        {"@"+profileData["handle"]}
                    </div>
                    <div className={"bio"}>
                        {profileData["bio"]}
                    </div>
                    <div> <i className="fa-solid fa-location-arrow"></i>{profileData["location"]} &nbsp;
                        <i className="fa-solid fa-calendar"></i> {profileData["dateOfBirth"]} &nbsp;
                        <i className="fa-solid fa-calendar-check"></i>{profileData["dateJoined"]} &nbsp;
                        <button type="button" id={"floatMeRight"} className="btn btn-primary" onClick={() => (setEditingProfile(true))} >Edit Profile</button>
                    </div>
                    <div>
                        <span className={"bio"}>{profileData["followingCount"]}</span>
                        <span> &nbsp; following &nbsp;</span>
                        <span className={"bio"}>{profileData["followersCount"]}</span>
                        <span> &nbsp;followers  &nbsp; </span>
                    </div>
                </div>
            </div>


        )
    }


}

export default Profile;