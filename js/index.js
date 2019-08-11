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
function keydownPress(){
    //not working
    document.getElementsByTagName('body')[0].addEventListener('keydown',function(){alert('You Pressed A Key')});
}
function navDivBackground(){
    //not working
    let navDiv = document.getElementsByClassName('main-navigation');
    window.addEventListener('scroll',()=>{
        navDiv[0].style.backgroundColor="#FCBC4F"; event.stopPropagation();
    }) 
    window.addEventListener('mouseover',()=>{
        navDiv[0].style.backgroundColor="white"; event.stopPropagation();
    }) 
    
    
}
navOnClick();
btnBckGround();
navBar();
keydownPress();
navDivBackground();