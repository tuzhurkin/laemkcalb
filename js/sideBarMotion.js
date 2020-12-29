//  LETTER ANIMATION CLASS --SPECIALLY FOR SIDENAV MENU

class letterAnimation {
    constructor(className) {

        this.className = document.querySelector(className);
        this.outerCollection = document.querySelectorAll(`${className} .outer`);
        this.lenOuter = this.outerCollection.length;
        this.middleOuter = Math.floor(this.outerCollection.length / 2);
        this.translateValue = [];
        this.translateValueStep = 0.4;

        this.letterCollection = document.querySelectorAll(`${className} .letter`);
        this.lenLetter = this.letterCollection.length;
        this.middleLetter = Math.floor(this.letterCollection.length / 2);
        this.delayValue = [];
        this.delayValueStart = 0.1;
        this.delayValueStep = 0.08;
    }

    setTranslateValue() {
        for(let i = this.middleOuter; i > 0; i--){
            this.translateValue[this.middleOuter - i] = Number((- i * this.translateValueStep).toFixed(2));
        }
        for(let i = this.middleOuter; i < this.lenOuter; i++){
            this.translateValue[i] = Number(((i - this.middleOuter) * this.translateValueStep).toFixed(2));
        }
        // console.log(this.translateValue);
    }

    setDelayValue() {
        for(let i = 0; i < this.middleOuter + 1; i++){
            this.delayValue[this.middleOuter + i] = Number((this.delayValueStart + this.delayValueStep * i).toFixed(2));
            this.delayValue[this.middleOuter - i] = Number((this.delayValueStart + this.delayValueStep * i).toFixed(2));
        }
        // console.log(this.delayValue);
    }

    reveal() {
        this.setDelayValue();

        this.className.querySelectorAll('.reveal').forEach(el => {      // querySelectorAll('.letter')
            el.style.transitionDelay = "0.3s";
            el.style.transitionDuration = `${ this.delayValue[ el.getAttribute('data-index') ] * 1.25 }s`;
            el.style.transform = "translateY(0)";
        })
    }

    conceal() {
        this.className.querySelectorAll('.reveal').forEach(el => {      // querySelectorAll('.letter')
            el.style.transitionDelay = "0s";
            el.style.transitionDuration = `${ this.delayValue[ el.getAttribute('data-index') ] }s`;
            el.style.transform = "translateY(80%)";
        })
    }
    

    animateOnHover() {
        this.setTranslateValue();
        this.setDelayValue();

        this.className.addEventListener('mouseenter', () => {
            this.className.querySelectorAll('.outer').forEach(el => {
                // console.log(el.getAttribute('data-index'));
                el.style.transform = `translateX(${ this.translateValue[ el.getAttribute('data-index') ] }em)`;
            })
            this.className.querySelectorAll('.letter').forEach(el => {
                el.style.transitionDelay = "0s";
                el.style.transitionDuration = `${ this.delayValue[ el.getAttribute('data-index') ] }s`;
                el.style.transform = "translateY(-85%)";
            })
        })
        this.className.addEventListener('mouseleave', () => {
            this.className.querySelectorAll('.outer').forEach(el => {
                el.style.transform = "translateX(0)";
            })
            this.className.querySelectorAll('.letter').forEach(el => {
                el.style.transform = "translateY(0)";
            })
        })
    }

}

let projets = new letterAnimation('.PROJETS');
projets.animateOnHover();

let infos = new letterAnimation('.INFOS');
infos.animateOnHover();

let contact = new letterAnimation('.CONTACT');
contact.animateOnHover();

let icons = document.querySelectorAll('.ICONS .socials-sidebar__item');
console.log(icons);

//      //

const burger = document.querySelector('.burger');
const burgerColor = document.querySelectorAll('.burger__color');
const navContainer = document.querySelector('.nav-container');
const documentBody = document.body;

let navShow = false;

const $black = "#1d1d1d";
const $white = "#fcfcfc";

// WHAT HAPPENS WHEN BURGER BUTTON IS BEING PRESSED

burger.addEventListener('click', (e) => {               
    burger.classList.toggle('cross-transform');         // transforms the burger into the cross and back

    if(!navShow) {                                      // shows side navigation menu
        navContainer.style.width = "100%";
        documentBody.style.overflow = "hidden";         // hides the rest of the page when scrolling on sidenav menu

        projets.reveal();
        infos.reveal();
        contact.reveal();

        icons.forEach( icon => {         
            icon.style.transition = "opacity 0.5s ease 0.5s";
            icon.style.opacity = "1";
        });
        
        burgerColor.forEach( line => { 
            line.style.transitionDelay = "0.1s";
            line.style.backgroundColor = $black;
        })

        navShow = true;
    }
    else {
        navContainer.style.width = "0%";
        documentBody.style.overflow = "visible";

        projets.conceal();
        infos.conceal();
        contact.conceal();

        icons.forEach( icon => {            
            icon.style.transition = "opacity 0.25s ease 0s";
            icon.style.opacity = "0";
        });

        burgerColor.forEach( line => { 
            line.style.transitionDelay = "0.4s";
            line.style.backgroundColor = $white;
        })

        navShow = false;
    }
})
