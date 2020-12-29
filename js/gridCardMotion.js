// scales up the image of card-project while hovering on the card
// makes smooth card-caption reveal while hovering on the card
// works only when the screen width is > 767px

const cardGrid = document.querySelectorAll('.card-project');
let windoWidth = window.innerWidth;                             // returns the width of current frame


cardGrid.forEach( card => { 
    
    card.addEventListener('mouseenter', () => {
        windoWidth = window.innerWidth;         // calculate the width of current frame every time we hover the card

        if(windoWidth > 767) {                  
            // scale the image up while hovered
            card.querySelector('.card-project__link .card-project__img-wrapper .card-project__img').style.transform = "scale(1.125)";
            // reveal text on the project card while hovered
            card.querySelector('.card-project__link .card-project__caption .card-project__text_main').style.transform = "translateY(0%)";
            card.querySelector('.card-project__link .card-project__caption .card-project__text_main').style.opacity = "1";
            card.querySelector('.card-project__link .card-project__caption .card-project__text_sub').style.transform = "translateY(0%)";
            card.querySelector('.card-project__link .card-project__caption .card-project__text_sub').style.opacity = "1";
        }
    })
    card.addEventListener('mouseleave', () => {
        windoWidth = window.innerWidth;

        if(windoWidth > 767) {
            // scale the image down while unhovered
            card.querySelector('.card-project__link .card-project__img-wrapper .card-project__img').style.transform = "scale(1)";
            // conceal text on the project card while unhovered
            card.querySelector('.card-project__link .card-project__caption .card-project__text_main').style.transform = "translateY(100%)";
            card.querySelector('.card-project__link .card-project__caption .card-project__text_main').style.opacity = "0";
            card.querySelector('.card-project__link .card-project__caption .card-project__text_sub').style.transform = "translateY(100%)";
            card.querySelector('.card-project__link .card-project__caption .card-project__text_sub').style.opacity = "0";
        }
    })
        
})

