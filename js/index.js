// Your code goes here
function navOnClick(){
    let adPicture = document.getElementsByClassName('img-fluid rounded');
    adPicture[0].addEventListener('mouseover', function(){
        adPicture[0].style.opacity = '.5';
        adPicture[0].style.zIndex = '-1';
    });
    adPicture[0].addEventListener('mouseout', function(){
        adPicture[0].style.opacity = '1';     
    });
}
function btnBckGround(){
    let button = document.getElementsByClassName('btn');
    let arrayB = Array.from(button);
    arrayB.forEach((item) => item.addEventListener('click',function(){item.style.backgroundColor = 'red'; })) 
}
function navBar(){
    let nav = document.getElementsByClassName('nav-link');
    let arrayN = Array.from(nav);
    arrayN.forEach((item) => item.addEventListener('focus',function(){item.style.backgroundColor = '#C0C0C0';item.style.borderRadius = '5px'; item.style.padding = '2px';})) 
}
function blogScroll(){
    //not working
    let nav = document.getElementsByClassName('nav-link');
    let div = document.getElementsByClassName('container home');
    div.scrollTop = div.scrollHeight;
    nav[2].addEventListener('click', function(){window.scrollTo(0,div.scrollTop = div.scrollHeight);event.preventDefault()});
}
function navDivBackground(){
    //not working
    let navDiv = document.getElementsByClassName('main-navigation');
    document.getElementsByTagName('body')[0].addEventListener('scroll', function(){navDiv[0].style.backgroundColor="#FCBC4F"; event.stopPropagation();});
}
navOnClick();
btnBckGround();
navBar();
blogScroll();
navDivBackground();