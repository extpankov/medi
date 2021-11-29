$(document).ready(function () {
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
    function () {
        $('.rnc__case').removeClass('rnc__case-active')
        $(this).addClass('rnc__case-active')
    }
)

let midCont = [
    ["mnlc__case-1", "mrc__case-1"],
    ["mnlc__case-2", "mrc__case-2"],
    ["mnlc__case-3", "mrc__case-3"]
]

let mass = false

$('.mnlc__case').hover(
    function () {
        $('.mnlc__case').removeClass('mnlc__case-active')
        $('.mrc__case').removeClass('mrc__case-active')
        $(this).addClass('mnlc__case-active')
        mass = document.getElementsByClassName('mnlc__case-active')[0].classList[1]
        let active = false
        for (let k = 0; k != midCont.length; k++) {
            if (mass == midCont[k][0]) {
                active = midCont[k][1]
                break
            }
        }
        active = "." + active
        $(active).addClass('mrc__case-active')
        // console.log(active);
    },
    function () {
        console.log(1)
    }
)