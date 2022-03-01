import PostSummaryItem from "./PostSummaryItem.js"
import exploreItems from "./posts.js"

function PostSummaryList() {
    let returnString = `<span id ="feed">
    <div class="container-fluid">`;
    for(let i = 0; i <exploreItems.length; i++){
        returnString += (PostSummaryItem(exploreItems[i]));
    }
    returnString += `</div></span>`;
    return(returnString);
}

export {PostSummaryList as default};