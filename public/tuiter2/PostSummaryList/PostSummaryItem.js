function PostSummaryItem(item){
    return (`
    <div class = "row">
        <div class="col-8 themed-grid-col">
            <div class="topic">${item.topic}</div>
            <div class="author">${item.userName} <i class="fa-solid fa-circle-check"></i> <span class="time">${item.time}</span></div>
            <div class="tweetbody">${item.title}</div>
            <div class="time">${item.tweets} tweets</div>
        </div>
        <div class="col-4">
            <img class="img-responsive" src=${item.image} alt="Responsive image" height="100px">
        </div>
    </div>
    `)
}


export {PostSummaryItem as default};