import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
        <div class="container-fluid">
            <!--Search bar with cog -->
            <div class="row">
            <div class="input-group mb-3" id="test">
                <input type="text" class="form-control" id="searchbar" aria-describedby="basic-addon3" placeholder="&#x1F50D;   Search Tuiter">
                <div class="input-group-append" id="gearappend">
                    <span class="input-group-text" id="gearbackground"> <a id="gear" href="#">
                    <i class="fa-solid fa-gear id=gearGlyph"></i>
                </a></span>
                </div>
            </div>
            </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
               <div class="row">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="../../cat.jpeg" alt="First slide">
                                <p class="carousel-caption text-start"><span id="carouselheadline"> Black cats are spooky.</span><br><span id="carouseltext">Very spooky.</span></p>
                                <p class="carousel-caption text-start"> </p>
                            </div>
                        </div>
                </div>
                </div>
           
           ${PostSummaryList()}
           
           </div>
    `);
}
export default ExploreComponent;
