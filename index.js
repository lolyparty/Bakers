const loadAnimation = ()=>{
    document.querySelector('#loadinganimation_container').classList.add('loadanimation')
}

window.addEventListener('load', loadAnimation)

    $('.works_carousel').slick({
        centerMode:true,
        centerPadding:'0px',
        slidePerRow:1,
        arrows:true,
        dots:true,
        slidesPerRow: 1, 

    });
