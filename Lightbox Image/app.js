
const images = document.querySelectorAll(".content img");
images.forEach((item) => item.addEventListener("click", handleZoomImage));

function handleZoomImage(event) {
    // console.log(event.target);

    const image = event.target.getAttribute("src");

    const template = `
    <div class = "lightbox">
        <div class="lightbox-content">
        <i class="fa fa-angle-left lightbox-prev"></i>
            <img src="${image}" alt="" class="lightbox-image" />
            <i class="fa fa-angle-right lightbox-next"></i>
        </div>
    </div>`;

    document.body.insertAdjacentHTML("beforeend", template);
}

let index = 0;

document.body.addEventListener("click", function(e){

    const lightboxImage = document.querySelector(".lightbox-image");
    let lightSrc = "";
    if (e.target.matches(".lightbox")){
        //remove light out of dom
        e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches(".lightbox-next")) {
        lightSrc = lightboxImage.getAttribute("src");
        index = [...images].findIndex(item => item.getAttribute("src") === lightSrc);
        index += 1;
        if (index > images.length - 1) {
            index = 0;   
        }
        const newSrc = [...images][index].getAttribute("src");
        lightboxImage.setAttribute("src", newSrc);
    } else if (e.target.matches(".lightbox-prev")){
        lightSrc = lightboxImage.getAttribute("src");
        index = [...images].findIndex(item => item.getAttribute("src") === lightSrc);
        index -= 1;
        if (index < 0) {
            index = images.length - 1;   
        }
        const newSrc = [...images][index].getAttribute("src");
        lightboxImage.setAttribute("src", newSrc);
    }
})
