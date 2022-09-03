    var darkModeSwitch = document.querySelector('.moon');
    var body = document.querySelector('body');
    var lightModeSwitch = document.querySelector('.sun');
    var linkItem = document.querySelectorAll('.flexLink');
    var linkItemAnchor = document.querySelectorAll('.flexLinkAnchor')
    var headerCircle = document.querySelector('.banner');
    var instagramLetters = document.querySelector('header p');


function switchModeDark(){

    body.classList.toggle('dark');
    darkModeSwitch.classList.toggle('disabled');
    lightModeSwitch.classList.toggle('disabled');
    for(c=0;c<linkItem.length;c++){
        linkItem[c].classList.toggle('darkPurple');
        linkItemAnchor[c].classList.toggle('darkPurple');
    }
    headerCircle.id = 'headerImage';
    instagramLetters.classList.toggle('darkPurple');
}

function switchModeBright(){
    body.classList.toggle('dark');
    darkModeSwitch.classList.toggle('disabled');
    lightModeSwitch.classList.toggle('disabled');
    for(c=0;c<linkItem.length;c++){
        linkItem[c].classList.toggle('darkPurple');
    }
    headerCircle.removeAttribute('id'); 
    instagramLetters.classList.toggle('darkPurple');
}