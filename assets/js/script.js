$(document).ready(function () {
    $('#headCarousel').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 4000,
        nextArrow: '<button class="btn-next icon-next"></button>',
        prevArrow: '<button class="btn-prev icon-prev"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    //menu toggle for mobile-tablet
    $('#btnMenu').on('click', function () {
        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
        $('body').toggleClass('overflow-hidden');
    })

    $('.collapseBtn').on('click', collapseMenu);
    $('.collapseBtn img').on('click', collapseMenu);

    function collapseMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        let parentEl = e.target.parentNode;

        if (parentEl.nodeName === 'A' || parentEl.nodeName === 'a') {
            parentEl = parentEl.parentNode;
        }

        if (parentEl.nodeName === 'DIV' || parentEl.nodeName === 'DIV') {
            parentEl = parentEl.parentNode.parentNode.parentNode;
        }

        parentEl.querySelector('.collapseLinks').classList.toggle('active')
    }

    $('.collapseBtn2').on('click', collapseSubMenu);
    $('.collapseBtn2 img').on('click', collapseSubMenu);

    function collapseSubMenu(e) {
        e.target.closest('.collapseBtn2').classList.toggle('active');
        e.target.closest('.lists').classList.toggle('active');
        if (e.target.closest('.academy')) {
            e.target.closest('.academy').classList.toggle('activeLink');
            e.target.closest('li').classList.toggle('activeSubLink');
        } else if (e.target.closest('.structure')) {
            e.target.closest('.academy').classList.toggle('structure');
            e.target.closest('li').classList.toggle('activeSubLink');
        }
    }
});