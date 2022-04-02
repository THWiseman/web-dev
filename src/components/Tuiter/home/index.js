import React from 'react'
import TuitList from "../tuit-list"
import WhatsHappening from "../whats-happening";
import './home.css'

const HomeScreen = () => {
    return(
        <div>
            <WhatsHappening/>
            <TuitList/>
        </div>
    )
}


// const HomeScreen = () =>
// {
//     return(
//         <div className="container">
//             <div className="row mt-2">
//                 <div className="col-2 col-md-2 col-lg-1 col-xl-2 pt-4">
//                     <Index active="explore"/>
//                 </div>
//                 <div className="col-10 col-md-10 col-lg-7 col-xl-6"
//                      style={{"position": "relative"}}>
//                     <BookmarksList bookmarks = {bookmarks} />
//                 </div>
//                 <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 pt-4">
//                     <PostSummaryList posts = {posts}/>
//                 </div>
//             </div>
//         </div>
//         );
// };
export default HomeScreen
