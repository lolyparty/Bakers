const loadAnimation = ()=>{
    document.querySelector('#loadinganimation_container').classList.add('loadanimation')
    document.querySelector('.page_container').style.display = 'block'
}

window.addEventListener('DOMContentLoaded', loadAnimation)

    $('.works_carousel').slick({
        // centerPadding:'0px',
        arrows:true,
        dots:true,
        // slidesPerRow: 1,  
        // centerMode: true,
        // centerPadding: '-10px',   
        slidesToShow: 3, 
    });

        document.querySelector('.slick-current').nextSibling.classList.add('active')
