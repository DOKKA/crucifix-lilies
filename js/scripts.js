$(document).ready(function () {/* smooth scrolling for scroll to top */
    $('.scroll-top').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
    /* smooth scrolling for scroll down */
    $('.scroll-down').click(function () {
        $('body,html').animate({scrollTop: $(window).scrollTop() + 800}, 1000);
    });

    /* highlight the top nav as scrolling occurs */
    $('body').scrollspy({target: '#navbar'})

    var stagger = function(){
        var stagger = $('.stagger');
        var childArr = stagger.children().toArray();
        var child1 = $(childArr[0]);
        if($(window).width()< 800){
            if(child1.hasClass('col-md-5')){
                stagger.append(child1);
            }
        } else {
            if(child1.hasClass('col-md-7')){
                stagger.append(child1);
            }
        }
    };


    $(window).resize(function(){
        stagger();
    });

    stagger();

});