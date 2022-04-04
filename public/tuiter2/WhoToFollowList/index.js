import who from "./who.js"
import whoToFollowListItem from "./whoToFollowListItem.js"

const WhoToFollowList = () => {
    let whoToFollow = ``;
    for(let i = 0; i < who.length; i++){
        whoToFollow += whoToFollowListItem(who[i]);
    }
    return (`
            <div class="container-fluid pt-4" id="follow">
                <div class = "row" id="toprow">
                    <div class="col-sm-12" id="whoToFollow">
                        Who to follow
                    </div>
                </div>
           
            ${whoToFollow}
            </div>
`); }

export {WhoToFollowList as default};
