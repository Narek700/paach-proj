$(document).ready(function () {
    $('.pc-1').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        slidesToShow: 5,
        infinite: false,
        accessibility: true,
        focusOnSelect: true,
        vertical: true,
        asNavFor: '.pc-2',
    });

    $('.pc-2').slick({
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        draggable: false,
        asNavFor: '.pc-1',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    dots: true,
                    draggable: true,
                }
            },
        ]
    });

    $('.see-more').on('click', function (e) {
        e.preventDefault();
        e.target.parentNode.querySelector('.desc-info').classList.toggle('active');
    })
});