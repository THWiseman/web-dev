import bookmarks from "./bookmarks.js";
import BookmarkItem from "./BookmarkItem.js";

const BookmarksList = () =>{
    return `${bookmarks.map(x => BookmarkItem(x))}`;
}
export default BookmarksList;