$(function () {
    //回到顶部

    var speed = 800;//滚动速度
    var h=document.body.clientHeight;

    $(".arrow").click(function () {
        $('html,body').animate({
                scrollTop: '0px'
            },
            speed);
    });
    /*scroll style*/
    $("html").niceScroll({
        autohidemode: true,
        cursorcolor: "#39c9da",
        touchbehavior: false,
    })

    /*楼层缓动*/
    $('.navbar-nav li a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    window.onscroll=function () {
        if($('#about').offset().top){
            $("#about .abt-left").addClass('active')
        }

    }
    $(".banner-info").addClass('active')


    /*animation WOW*/
    var wow = new WOW({
        mobile: false
    });
    wow.init();






})