const loadAnimation = ()=>{
    document.querySelector('#loadinganimation_container').classList.add('loadanimation')
        document.querySelector('.page_container').style.display = 'block'
}

window.addEventListener('load', loadAnimation)


// anime js for naimations
    var textWrapper = document.querySelector('.ml6 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
    .add({
        targets: '.ml6 .letter',
        opacity:0,
        duration:2300,
    })
    .add({
        targets: '.ml6 .letter',
        opacity:1,
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 1750,
        delay: (el, i) => 50 * i
    });



//slick carousel
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