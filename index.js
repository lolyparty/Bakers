const loadAnimation = ()=>{
    document.querySelector('#loadinganimation_container').classList.add('loadanimation')
    setTimeout(()=>{
            document.querySelector('.page_container').style.display = 'block'
    }, 3500); 
}

window.addEventListener('DOMContentLoaded', loadAnimation);


// anime js for naimations
    var textWrapper = document.querySelector('.ml6 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
    .add({
        targets: '.ml6 .letter',
        opacity:0,
        delay:3300,    
    })
    .add({
        targets: '.ml6 .letter',
        opacity:1,
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 1750,
        delay: (el, i) => 50 * i
    });

    document.querySelector('.hamburger-menu').addEventListener('click',()=>{
        document.querySelector('.hamburger-menu').classList.toggle('open');
        document.querySelector('nav').classList.toggle('open'); 
        document.body.style.overflowY = document.body.style.overflowY === 'hidden' ? 'visible' : 'hidden';
    })

    document.querySelectorAll('.nav-link').forEach(link=>{
        link.addEventListener('click',()=>{
            document.querySelector('.hamburger-menu').classList.remove('open');
            document.querySelector('nav').classList.remove('open'); 
            document.body.style.overflowY = document.body.style.overflowY === 'hidden' ? 'visible' : 'hidden';
        })
    });