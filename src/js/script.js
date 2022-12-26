// Slider

$(document).ready(function(){
    $('.promo__slider').slick({
        dots: true,
        // arrows: false,
        // fade: true,
        // cssEase: 'linear',
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="prev"><img src="icons/slide/left_arr.png"></button>',
        nextArrow: '<button type="button" class="next"><img src="icons/slide/right_arr.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});

// Hamburger menu

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.promo__menu');
const closeElem = document.querySelector('.promo__close');
const menuList = document.querySelectorAll('.promo__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuList.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// Slider 2

$(document).ready(function(){
    $('.solutions__slider').slick({
        dots: false,
        // arrows: false,
        // fade: true,
        // cssEase: 'linear',
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="prev"><img src="icons/slide/left_mac.svg"></button>',
        nextArrow: '<button type="button" class="next"><img src="icons/slide/right_mac.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});

// Tabs

$(document).ready(function(){
    $('ul.solutions__tabs').on('click', 'li:not(.solutions__tab_active)', function() {
      $(this)
        .addClass('solutions__tab_active').siblings().removeClass('solutions__tab_active')
        .closest('div.container').find('div.solutions__laptop')
        .removeClass('solutions__laptop_active').eq($(this).index()).addClass('solutions__laptop_active');
    });
});