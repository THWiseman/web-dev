import profileJson from '../data/profile.json';


const profileReducer = (state = profileJson, action) => {
    switch(action.type){
        case 'save-profile':
            console.log("save");
            state["firstName"] = action.profileData.firstName;
            state["lastName"] = action.profileData.lastName;
            state["editingProfile"] = false;
            return state;
        case 'edit-profile':
            state["editingProfile"] = true;
            return state;
    }
    console.log("returning default state");
    return state;
}

export default profileReducer;