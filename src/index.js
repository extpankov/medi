$(document).ready(function(){
    const slider = $(".slider").owlCarousel({
        loop: true,
        center: true,
        nav: true,
        margin: 1,
        dots: false,
        navText: [
            '<div class="arrow-owl arrow-left"><img src="./img/arrow-left.svg" alt="arrow-left"></div>',
            '<div class="arrow-owl arrow-right"><img src="./img/arrow-right.svg" alt="arrow-right"></div>'
        ],
        items: 1,
        autoWidth: true
    });
});

$('.rnc__case').hover(
    function() {
    $('.rnc__case').removeClass('rnc__case-active')
    $(this).addClass('rnc__case-active')
}, function() {
    $('.rnc__case').removeClass('rnc__case-active')
    setTimeout(() => { 
        if ($('.rnc__case-active').length == 0) {
            $('.rnc__case').first().addClass('rnc__case-active')
        }
    }, 1);
}
)