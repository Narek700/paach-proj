function status(e) {
    $(e.target).parent().find('.shop-items').toggleClass('passive');

    if ($(e.target).parent().find('.shop-items').hasClass('passive')) {
        $(e.target).find('.status').html('Показать');
    } else {
        $(e.target).find('.status').html('Скрыть');
    }
}

$('.read-more').on('click', status);
$('.read-more .status').on('click', status);