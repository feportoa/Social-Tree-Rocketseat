    var darkModeSwitch = document.querySelector('.moon');
    var body = document.querySelector('body');
    var lightModeSwitch = document.querySelector('.sun');
    var linkItem = document.querySelectorAll('.flexLink');
    var linkItemAnchor = document.querySelectorAll('.flexLinkAnchor')
    var headerCircle = document.querySelector('.banner');
    var instagramLetters = document.querySelector('header p');
    var signature = document.querySelector('body section');


function switchModeDark(){

    body.classList.add('dark');
    darkModeSwitch.classList.add('disabled');
    lightModeSwitch.classList.remove('disabled');
    for(c=0;c<linkItem.length;c++){
        linkItem[c].classList.add('darkPurple');
        linkItemAnchor[c].classList.add('darkPurple');
    }
    headerCircle.id = 'headerImage';
    instagramLetters.classList.toggle('darkPurple');
    signature.classList.add('darkSignature');
}

function switchModeBright(){
    body.classList.remove('dark');
    darkModeSwitch.classList.remove('disabled');
    lightModeSwitch.classList.add('disabled');
    for(c=0;c<linkItem.length;c++){
        linkItem[c].classList.remove('darkPurple');
    }
    headerCircle.removeAttribute('id'); 
    instagramLetters.classList.remove('darkPurple');
    signature.classList.remove('darkSignature');
}