function whoToFollowListItem(who) {
    return (`
                    <div class = "row">
                    <div class="col-sm-2">
                        <img class="img-fluid img-rounded float-right pt-2" src=${who.avatarIcon}>
                    </div>
                    <div class="col-sm-6 pt-2">
                        <div class="author">${who.userName}<i class="fa-solid fa-circle-check"></i></div>
                        <div>${who.handle}</div>
                    </div>
                    <div class="col-4 pt-2">
                        <button type="button" class="btn btn-primary">Follow</button>
                    </div>
                </div>
   
   `);
}
export {whoToFollowListItem as default};