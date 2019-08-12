// Your code goes here
function navOnClick(){
    let adPicture = document.getElementsByClassName('img-fluid rounded');
    adPicture[0].addEventListener('mouseover', ()=>{
        adPicture[0].style.opacity = '.5';
        adPicture[0].style.zIndex = '-1';
    });
    adPicture[0].addEventListener('mouseout', ()=>{
        adPicture[0].style.opacity = '1';     
    });
}
function btnBckGround(){
    let button = document.getElementsByClassName('btn');
    let arrayB = Array.from(button);
    arrayB.forEach((item) => item.addEventListener('click',(e)=>{item.style.backgroundColor = 'white'; item.style.color='#17A2B8'; e.preventDefault();})) 
}
function navBar(){
    let nav = document.getElementsByClassName('nav-link');
    let arrayN = Array.from(nav);
    arrayN.forEach((item) => item.addEventListener('focus',()=>{item.style.backgroundColor = '#C0C0C0';item.style.borderRadius = '5px'; item.style.padding = '2px'; e.preventDefault();})) 
}
function keydownPress(){
    document.getElementsByTagName('body')[0].addEventListener('keydown',()=>{alert('You Pressed A Key')});
}
function navDivBackground(){
    
    let navDiv = document.getElementsByClassName('main-navigation');
    window.addEventListener('scroll',()=>{
        navDiv[0].style.backgroundColor="#FFEBCD"; event.stopPropagation();
    }) 
}
function copy(){
    document.getElementsByTagName('body')[0].addEventListener('copy',()=>{alert('Text Successfully Copied')});
}
function increaseFontSize(){
    let para = document.querySelector('.intro').children[2];
    para.addEventListener('wheel',()=>{para.style.fontSize = '20px'});
}
function flexChange(){
    let contentsec = document.querySelector('.content-section');
    let contentreverse = document.querySelector('.inverse-content');
    contentsec.addEventListener('dblclick',()=>{contentsec.style.flexDirection='row-reverse'; contentreverse.style.flexDirection="row-reverse";})
}
function bouceIn(){
    let docBody = document.querySelector('.home');
    let bounce = TweenLite.to(docBody, 2.5, { ease: Bounce.easeIn, y: 50});
    document.addEventListener('load',bounce);
    document.addEventListener('load',()=>{docBody.style.position='absolute'; docBody.style.zIndex = '-1';})

}

navOnClick();
btnBckGround();
navBar();
keydownPress();
navDivBackground();
copy();
increaseFontSize();
flexChange();
bouceIn();