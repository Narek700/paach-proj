//menu toggle for mobile-tablet
$('#btnMenu').on('click', function () {
    $(this).toggleClass('active');
    $('#nav').toggleClass('active');
    $('body').toggleClass('overflow-hidden');
});

$('.collapseBtn').on('click', collapseMenu);
$('.collapseBtn img').on('click', collapseMenu);

function collapseMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    if (window.innerWidth < 992) {
        let parentEl = e.target.parentNode;

        if (parentEl.nodeName === 'A' || parentEl.nodeName === 'a') {
            parentEl = parentEl.parentNode;
        }

        if (parentEl.nodeName === 'DIV' || parentEl.nodeName === 'DIV') {
            parentEl = parentEl.parentNode.parentNode.parentNode;
        }

        parentEl.querySelector('.collapseLinks').classList.toggle('active');
    }
}

$('.collapseBtn2').on('click', collapseSubMenu);
$('.collapseBtn2 img').on('click', collapseSubMenu);

function collapseSubMenu(e) {
    if (window.innerWidth < 992) {

        e.target.closest('.collapseBtn2').classList.toggle('active');
        e.target.closest('.lists').classList.toggle('active');
        if (e.target.closest('.academy')) {
            e.target.closest('.academy').classList.toggle('activeLink');
            e.target.closest('li').classList.toggle('activeSubLink');
        } else if (e.target.closest('.structure')) {
            e.target.closest('.structure').classList.toggle('activeLink');
            e.target.closest('li').classList.toggle('activeSubLink');
        }
    }
}

if (window.innerWidth < 992) {
    $("#header").addClass("active");
}

$(window).resize(function () {
    if (window.innerWidth < 992) {
        $("#header").addClass("active");
    } else {
        $('.collapseLinks').removeClass('active');
        $('body').removeClass('overflow-hidden');

        if ($(window).scrollTop() < 150) {
            $("#header").removeClass("active");
        }

        $('.collapseBtn2').removeClass('active');
        $('.lists').removeClass('active');
        $('.academy').removeClass('activeLink');
        $('.structure').removeClass('activeLink');
        $('li').removeClass('activeSubLink');
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (window.innerWidth > 991) {
        if (scroll > 150) {
            $("#header").addClass("active");
        } else {
            $("#header").removeClass("active");
        }
    }
})