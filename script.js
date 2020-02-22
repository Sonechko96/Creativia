$(document).ready(function(){
    $('.slider').slick({
        autoplay: false,
    });

    // $('.spoiler-body').hide();
    // $('.spoiler-title').click(function(){
    //     $(this).next().toggle();
    // });

    $('.slides').slick({
        autoplay: false,
        arrows: false,
        dots: true,
    });



    // отображение части блока по нажатию на кнопку

    $('body').on('click', '.button-show', function () {
        if($(this).hasClass('active')) {
            $('.blog-card:nth-child(n+3)').slideUp();
            $(this).removeClass('active');
        } else {
            $('.blog-card:nth-child(n+3)').css({'display': 'flex'}).hide().slideDown();
            $(this).addClass('active');
        }
    });


    $('body').on('click', '.spoiler-title', function () {
        if ($(this).hasClass('active')) {
            $(this).next().slideUp();
            $(this).removeClass('active');
            console.log(1);
        }

        else {
            $(this).next().css({'display': 'flex'}).hide().slideDown();
            $(this).addClass('active');
            console.log(2);
        }
    });




        $("#menu").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор блока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);

        });




});
