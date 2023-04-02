$(document).ready(function () {
    $('.eye').on('click', function (e) {
        e.target.classList.toggle('active');

        setTimeout(() => {
            if (!e.target.classList.contains('active')) {
                e.target.src = '../../assets/img/eye.svg';
                e.target.closest('.field').querySelector('input').type = 'password'
                console.log(1);
            } else {
                e.target.src = '../../assets/img/eye-close.svg';
                e.target.closest('.field').querySelector('input').type = 'text'
                console.log(2);
            }
        });
    });
})