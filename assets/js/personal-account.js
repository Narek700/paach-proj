$(document).ready(function () {
    var photoFile = $('#photoFile')

    photoFile.change(function () {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            $('#photo').css('background-image', 'url("' + reader.result + '")');
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
        }
    });

    $('.change-info').on('click', function (e) {
        e.target.classList.toggle('active');

        setTimeout(function () {
            if (e.target.classList.contains('active')) {
                e.target.closest('.changeable').querySelector('.input').disabled = false;
                e.target.closest('.changeable').querySelector('.input').focus();
            } else {
                e.target.closest('.changeable').querySelector('.input').disabled = true;
                e.target.closest('.changeable').querySelector('.input').blur();
            }
        })
    });
})