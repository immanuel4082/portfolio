const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function pageTransitions(){
    //Button click active class
    for(let i; i < sectBtn.length; i++){
        sectBtn[1].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn.replace('active-btn','');
            this.className += ' active-btn';
        })
    }
}

pageTransitions();