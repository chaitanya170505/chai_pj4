const carousel=document.querySelector('.carousel');
let slider=[];
let sliderIndex=0;
const createSlide=()=>{
    if(sliderIndex>=movies.length){
        sliderIndex=0;
    }

    //creating dom elements
    let slide=document.createElement('div');
    let imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[sliderIndex].name));
    p.appendChild(document.createTextNode(movies[sliderIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up images

    imgElement.src=movies[sliderIndex].image;
    sliderIndex++;

    //setting up class names
    slide.className='slider';
    content.className='slide-content';
    h1.className='movie-title';
    p.className='movie-des';

    slider.push(slide);

    if(slider.length){
        slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% - ${30 * (slider.length - 2)}px)`;
    }
}
for(let i=0;i<3;i++){
    createSlide();
}
setInterval(()=>{
    createSlide();
},3000);

const videoCards=document.querySelectorAll('.video-card');

videoCards.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        let video=item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    })
})

let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

document.addEventListener("DOMContentLoaded", function() {
    let cardContainers = document.querySelectorAll('.card-container');
    let preBtns = document.querySelectorAll('.pre-btn');
    let nxtBtns = document.querySelectorAll('.nxt-btn');

    cardContainers.forEach((container, i) => {
        let containerDimensions = container.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtns[i].addEventListener('click', () => {
            container.scrollLeft +=containerWidth - 200; // Scroll right by 200 pixels
        });

        preBtns[i].addEventListener('click', () => {
            container.scrollLeft -=containerWidth + 200; // Scroll left by 200 pixels
        });
    });
});


