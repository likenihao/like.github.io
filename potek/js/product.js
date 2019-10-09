$(function () {
    //问题start
    $(".faq_a dl dd").hide();
    $(".faq_a dl dt").click(function () {
        if ($(this).parent("dl").children("dd").css("display") == "none") {
            $(this).parent("dl").children("dd").show();
            console.log($(this).parent("dl").parent(".faq_a").siblings().children("dl").children("dd"));
            $(this).parent("dl").parent(".faq_a").siblings().children("dl").children("dd").hide();
            $(".faq_a dl dt i").removeClass("jian").addClass("jia");
            $(this).children("i").removeClass("jia").addClass("jian");
        } else {
            $(this).parent("dl").children("dd").hide();
            $(this).children("i").removeClass("jian").addClass("jia");
        }
    });
    //问题end 

    //监听滚动事件end
    //图片放大效果start
    //图片放大效果end
    //评论里的图片点击放大问题start
    $(".proimg_img").hide(); //默认隐藏
    $(".proimg_list ul li").click(function () {
        if ($(this).hasClass("curr")) {
            $(".proimg_img").hide();
            $(this).removeClass("curr");
        } else {
            var imgsrc = $(this).children("img").attr("src");
            $(".proimg_img img").attr("src", imgsrc);
            $(".proimg_img").show();
            $(".proimg_list ul li").removeClass("curr");
            $(this).addClass("curr");
        }
    });
    //评论里的图片点击放大问题end
});
//监听滚动事件start
var height = 700;
//左边导航根据滚动对应菜单进行添加当前样式
var h = $("#h").offset().top;
var r = $("#r").offset().top;
var s = $("#s").offset().top;
var f = $("#f").offset().top;
var re = $("#re").offset().top;
var hstate = 700;
var rstate = 700;
var sstate = 700;
var fstate = 700;
var restate = 700;
//设置标杆
var _line=parseInt($(window).height()/4);
$(".procon_left_menu ul li").click(function () {
    $(this).addClass('acurr').siblings().removeClass('acurr');
    var _i=$(this).index();
     $('body, html').animate({scrollTop:$('.rwarp').eq(_i).offset().top-_line},'fast');
});
$("#goReviews").click(function(){
    $(".procon_left_menu ul li").eq(1).addClass('acurr').siblings().removeClass('acurr');
    var _i=$(this).index();
     $('body, html').animate({scrollTop:$('.rwarp').eq(1).offset().top-_line},'fast');
});
$(document).scroll(function () {
    var scroH = $(document).scrollTop(); //滚动高度
    var viewH = $(window).height(); //可见高度 
    var contentH = $(document).height(); //内容高度
    if (scroH > 600) { //距离顶部大于100px时
        $(".procon_left .procon_left_menu").addClass("curr");
    } else {
        $(".procon_left .procon_left_menu").removeClass("curr");
    }
    //左边快到底部的时候，进行隐藏    
    if (contentH - scroH < 900) {
        $(".procon_left").hide();
    } else {
        $(".procon_left").show();
    }
    //滚动到标杆位置,左侧导航加active
    $('.rwarp').each(function(){
        var _target=parseInt($(this).offset().top-$(window).scrollTop()-_line);
        var _i=$(this).index();
        if (_target<=0) {
            $('.procon_left_menu ul li').removeClass('acurr');
            $('.procon_left_menu ul li').eq(_i).addClass('acurr');
        }
        //如果到达页面底部，给左侧导航最后一个加active
        else if($(document).height()==$(window).scrollTop()+$(window).height()){
            $('.procon_left_menu ul li').removeClass('acurr');
            $('.procon_left_menu ul li').eq($('.procon_left_menu ul li').length-1).addClass('acurr');
        }
    });
})