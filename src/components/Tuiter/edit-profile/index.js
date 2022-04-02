import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux";
import "../profile/profile.css"


const EditProfile = (props) => {
    const editFn = props.setEditFn;
    const profileData = useSelector(
        state => state.profile);
    const dispatch = useDispatch();

    let [firstName, setFirstName]
        = useState(profileData["firstName"]);
    let [lastName, setLastName]
        = useState(profileData["lastName"]);
    let [bio, setBio]
        = useState(profileData["bio"]);
    let [location, setLocation]
        = useState(profileData["location"]);
    let [dateOfBirth, setDateOfBirth]
        = useState(profileData["dateOfBirth"]);

    const saveProfileClickHandler = (profileData) => {
        profileData["firstName"] = firstName;
        profileData["lastName"] = lastName;
        profileData["bio"] = bio;
        profileData["location"] = location;
        profileData["dateOfBirth"] = dateOfBirth;
        editFn(false);
        dispatch({type: 'save-profile', profileData
        });
    }


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
                          <textarea id={"set-first-name"} value={firstName}
                                    onChange={(event) =>
                                        setFirstName(event.target.value)}>
                          </textarea>
                    <textarea id={"set-last-name"} value={lastName}
                              onChange={(event) =>
                                  setLastName(event.target.value)}>
                          </textarea>
                </div>
                <div className={"handle"}>
                    {"@"+profileData["handle"]}
                </div>
                <div className={"bio"}>
                    <textarea id={"set-last-name"} value={bio}
                              onChange={(event) => setBio(event.target.value)}>
                    </textarea>
                </div>
                <div> <i className="fa-solid fa-location-arrow"></i>
                    <i className="fa-solid fa-calendar"></i>
                    <textarea id={"set-location"} value={location}
                              onChange={(event) => setLocation(event.target.value)}>
                    </textarea> &nbsp; &nbsp;
                    <i className="fa-solid fa-calendar"></i>
                    <textarea id={"set-dateOfBirth"} value={dateOfBirth}
                              onChange={(event) => setDateOfBirth(event.target.value)}>
                    </textarea> &nbsp;
                    <i className="fa-solid fa-calendar-check"></i>{profileData["dateJoined"]} &nbsp;
                    <button type="button" id={"floatMeRight"} className="btn btn-primary" onClick={() => saveProfileClickHandler(profileData)} >Save Profile</button>
                    {/*<a href="/tuiter/profile" id={"floatMeRight"} className="btn btn-primary btn-md enabled" role="button" aria-disabled="true">Save Profile</a>*/}
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

export default EditProfile;