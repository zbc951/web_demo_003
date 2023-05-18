//swiper
$(function(){
    var swiper = new Swiper('.swiper', {
        loop: true,
        autoHeight: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });
})

//header
$(function(){
    $(window).scroll(function() {
        var scrollVal = $(this).scrollTop();

        $("header")
        .offset({
            "top" : ""+ scrollVal +"",
        })
    })

    $("header .bottom .gameBtn,.underList").hover(function(){
        $(".underList")
        .toggleClass("display");
    })
})

//goTop
$(function(){
    $(window).scroll(function(){
        var scrollVal = $(this).scrollTop();

        if(scrollVal > 1)
        {
            $(".goTop")
            .css({
                "opacity" : "1",
                "pointer-events" : "visible",
            })
        }
        else
        {
            $(".goTop")
            .css({
                "opacity" : "0",
                "pointer-events" : "none",
            })
        }
    })

    $(".goTop").on("click",function(){
        $("html,body")
        .animate({
            scrollTop : 0,
        },300)
    })
})