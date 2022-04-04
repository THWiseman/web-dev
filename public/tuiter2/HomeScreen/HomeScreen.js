import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import BookmarksList from "../BookmarkList/BookmarksList.js";

(function ($) {
    $('#wd-home').append(`
        <div class="container">
            <div class="row mt-2">
                <div class="col-2 col-md-2 col-lg-1 col-xl-2 pt-4">
                    ${NavigationSidebar()}
                </div>
                <div class="col-10 col-lg-7 col-xl-6 pt-4">
                    ${BookmarksList()}
                </div>
                <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 pt-4">
                    ${PostSummaryList()}
                </div>
            </div>
        </div>
    `);
})($);
