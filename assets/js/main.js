
class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
       this.mobileMenu = document.querySelector(mobileMenu)
       this.navList = document.querySelector(navList)
       this.navLinks = document.querySelectorAll(navLinks)
       this.activeClass = "active"
       
       this.handleClick = this.handleClick.bind(this)
    }
    animateLinks(){
        this.navLinks.forEach((link, index)=> {
            link.style.animation ? (link.style.animation = " ") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.2}s`);
        })
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLinks()
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent()
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)
mobileNavbar.init() 

/*--- NavActive Close ---*/
const nav = document.querySelectorAll('.nav-list li')
const navigation = document.querySelector('.nav-list')
nav.forEach((element,index)=>{
    element.addEventListener('click', ()=>{
    navigation.classList.remove('active')
})
})


/*--- Atualizando texto ---*/
$(function(){
	$(".typed").typed({
		strings: ["Student",
        "FullStack Jr.",
        "Tech Lover",
        "Gamer"],
		stringsElement: null,
		typeSpeed: 30,
		startDelay: 1200,
		backSpeed: 20,
		backDelay: 500,
		loop: true,
		loopCount: Infinity,
		showCursor: false,
		cursorChar: "|",
		attr: null,
		contentType: 'html',
		callback: function() {},
		preStringTyped: function() {},
		onStringTyped: function() {},
		resetCallback: function() {}
	});
});


/*projects*/

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        },
    }
  });

