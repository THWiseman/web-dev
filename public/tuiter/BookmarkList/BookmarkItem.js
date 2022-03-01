const bookmarkItem = (param) => {
    return (`
    <div class = "wd-bookmark">
    <div class = "wd-avatar"><img src=${param.profilePicPath} alt="React Logo" width="48" height="48"> </div>
    <div class = "wd-content">
        <div class="wd-person">
            <div class = "wd-name">${param.name}</div>
            <div class = "wd-handle">${param.handle} &#183; ${param.date}</div>
        </div>
        <p>
         ${param.body}
        </p>
    </div>
</div>
<p>
    <div class = "wd-content-img"><img src=${param.imgPath} alt="React Logo" width="504" height="264">
        <div class = "wd-content-img-title">${param.imgHeading} </div>
        <div class = "wd-content-img-body">${param.imgBody}</div>
</p>
</div>
<div class = "wd-content-img-icons">
    <div class = "wd-comment"> <a href="#">&#x1F5E8; ${param.numComments}</a> </div>
    <div class = "wd-retweet"> <a href="#">&#x267C; ${param.numRetweets} </a></div>
    <div class = "wd-like"> <a href ="#">&#x1F496; ${param.numLike} </a></div>
    <div class = "wd-upload"><a href = "#"> &#x23EB;</a></div>
</div>

<br>
    `);
}
export default bookmarkItem;
