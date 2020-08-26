var nextButton = document.getElementsByClassName("buttons")[0].children[1];
var backButton = document.getElementsByClassName("buttons")[0].children[0];
var slider = document.getElementsByClassName("slider")[0];
var contentSlider = document.getElementsByClassName("content")[0];
var dist = 0;

nextButton.onclick = (e) => {
    // e.preventDefault();
    dist += window.innerWidth;
    console.log(dist);
    dist = dist%(window.innerWidth * slider.children.length);
    console.log(1);
    slider.scroll({
        top: 0,
        left: dist,
        behavior: "smooth"
    });
    contentSlider.scroll({
        top: 0,
        left: dist,
        behavior: "smooth"
    });
    
}

backButton.onclick = (e) => {
    dist -= window.innerWidth;
    dist = dist < 0? window.innerWidth * (slider.children.length - 1) : dist;
    console.log(dist);
    slider.scroll({
        top: 0,
        left: dist,
        behavior: "smooth"
    });
    contentSlider.scroll({
        top: 0,
        left: dist,
        behavior: "smooth"
    });
    // dist += window.innerWidth;
    // console.log(dist);
    // dist = dist%(window.innerWidth * slider.children.length);
}