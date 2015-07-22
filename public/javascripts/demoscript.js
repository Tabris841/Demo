$(document).ready(function () {
    $(".facebook").hover(linkHover).mouseout(linkOut);
    $(".tweeter").hover(linkHover).mouseout(linkOut);
    $(".google").hover(linkHover).mouseout(linkOut);

    function linkHover() {
        $(this).animate({
            'background-position-x': '0',
            'background-position-y': '-50px'
        }, 200, 'linear');
    }

    function linkOut() {
        $(this).animate({
            'background-position-x': '0',
            'background-position-y': '0'
        }, 200, 'linear');
    }

    $(".pop").on("click", function () {
        $('#imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('#toTheTop').fadeIn('slow');
        } else {
            $('#toTheTop').fadeOut('slow');
        }
    });

    $('#toTheTop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });

    $("#partnersInner").hover(
        function(){
            $("img").css("animation-play-state", "paused");
        },
        function(){
            $("img").css("animation-play-state", "running");
        });
});
