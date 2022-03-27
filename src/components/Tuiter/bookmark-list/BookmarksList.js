
import BookmarkItem from "./BookmarkItem";
import React from 'react'

const BookmarksList = ({bookmarks}) =>{
    return(
        <div>
        {bookmarks.map(x => BookmarkItem(x))};
        </div>
    )
}
export default BookmarksList;