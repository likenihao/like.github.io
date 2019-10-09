$(function () {
    var height = $(window).height(); //获取浏览器的可视高度
    //设置购物车的高度
    $(".tbar-panel-main").height(height - 180 + "px");
    //头部个人中心start
    $(".header .a2 ol").hide();
    $(".header .a2 .sanjiao").hide();
    $(".header .a2").click(function () {
        if ($(".header .a2 .sanjiao").css("display") == "none") {
            $(".header .a2 .sanjiao").show();
            $(".header .a2 ol").slideDown();
        } else {
            $(".header .a2 .sanjiao").hide(500);
            $(".header .a2 ol").slideUp();
        }
    })
    //头部个人中心end
    //主导航菜单start
    var oldNav_bgStyle = $(".nav_bg").attr("style");
    var menu_lineStyle = $(".menu_line").attr("style");
    var nav_contentStyle = $(".nav_content").attr("style");
    var menuUlliStyle = $(".nav_warp .menu>ul>li").attr("style");
    var isHome = $("#isHome").val();
    if (isHome == 1) {
        $(".nav_warp .menu>ul>li").attr("style", "color:#fff");
    } else {
        $(".nav_warp .menu>ul>li").attr("style", "color:#333");
    }
    var scroTop = $(window).scrollTop(); //滚动高度
    $(".menu ul li").hover(function () {
        $(".nav_bg").attr("style", "filter: alpha(opacity = 100);moz - opacity: 1;khtml - opacity: 1;opacity: 1;background-color:#fff;")
        $(".nav_content").attr("style", "height:280px;transition: 400ms;background-color:#fff;");
        if (scroTop > 100) {
            $(".nav_warp .menu>ul>li").attr("style", "color:#333");
        } else {
            $(".nav_warp .menu>ul>li").attr("style", "color:#333");
        }
        //$(this).children("dl").fadeIn("fast");
        $(this).children("dl").attr("style", "height:260px;transition: 600ms;");
        $(".menu_line").show();
    }, function () {
        $(this).children("dl").attr("style", "height:0px");
        $(".nav_bg").removeAttr("style");
        if (scroTop > 100) {
            $(".nav_warp .menu>ul>li").attr("style", "color:#333");
            $(".menu_line").show();
        } else {
            if (isHome == 1) {
                $(".nav_warp .menu>ul>li").attr("style", "color:#fff");
            } else {
                $(".nav_warp .menu>ul>li").attr("style", "color:#333");
            }
            $(".menu_line").hide();
        }
        $(".nav_bg").attr("style", oldNav_bgStyle);
        $(".menu_line").attr("style", menu_lineStyle);
        
        $(".nav_content").attr("style", "height: 70px;transition: 400ms;");
    });
    //主导航菜单end
    //openCart-start
    $('.openCart').click(function () {
        if ($('.toolbar-wrap').hasClass('toolbar-open')) {
            $('.toolbar-wrap').removeClass('toolbar-open');
            $(".toolbar-wrap").attr("style", "right: 0px;transition: 400ms;");
            $('.tbar-panel-cart').css({
                'visibility': "hidden",
                "z-index": "-1"
            });
        } else {
            $(this).addClass('tbar-tab-click-selected');
            $(this).find('.tab-text').remove();
            $('.tbar-panel-cart').css({
                'visibility': "visible",
                "z-index": "1"
            });
            $('.tbar-panel-follow').css('visibility', 'hidden');
            $('.tbar-panel-history').css('visibility', 'hidden');
            $('.toolbar-wrap').addClass('toolbar-open');
            $(".toolbar-wrap").attr("style", "right: 350px;transition: 400ms;");
        }
    });
    $("body").click(function (e) {
        if (!$(e.target).closest(".openCart,.toolbar-wrap").length) {
            $('.toolbar-wrap').removeClass('toolbar-open');
            $(".toolbar-wrap").attr("style", "right: 0px;transition: 400ms;");
        }
        if (!$(e.target).closest(".header .a2").length) {
            $(".header .a2 .sanjiao").hide(500);
            $(".header .a2 ol").slideUp();
        }
    });
    //openCart-end
    //go-top-start
    $('.tbar-tab-top').hide();
    $(window).scroll(function () {
        scroTop = $(window).scrollTop(); //滚动高度
        var viewH = $(window).height(); //可见高度 
        var contentH = $(document).height(); //内容高度
        if (scroTop > 100) {
            //回到顶部显示
            $('.tbar-tab-top').fadeIn(500);
            //主导航
            $(".menu_line").show();
            $(".nav_bg").attr("style", "filter: alpha(opacity = 80);moz - opacity: 0.8;khtml - opacity: 0.8;opacity: 0.8;background-color:#fff;");
            $(".nav_warp .menu>ul>li").attr("style", "color:#333333");
            menuUlliStyle = $(".nav_warp .menu>ul>li").attr("style");
        } else {
            $(".nav_bg").removeAttr("style");
            $(".nav_warp .menu>ul>li").removeAttr("style");
            //回到顶部
            $('.tbar-tab-top').fadeOut(500);
            //主导航
            $(".menu_line").hide();
            $(".nav_bg").attr("style", "");
        }
        oldNav_bgStyle = $(".nav_bg").attr("style");
        menu_lineStyle = $(".menu_line").attr("style")
    });
    $('.tbar-tab-top').click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, "fast");
    });
    //go-top-end
});