var mySwiper = new Swiper('.banner1', {
  autoplay: false, //可选选项，自动滑动
  effect: 'fade',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
$(window).load(function () {
  single = $('.single').mySingleScroll({
    speed: 2000
  });
});

$(function () {
  //问题
  $(".faq_warp").hide();
  $(".faq_title").click(function () {
    if ($(this).children("i").hasClass("piconzengjia-01")) {
      $(this).children("i").removeClass("piconzengjia-01").addClass("piconiconfront-");
      $(this).parent("div").addClass("faq_listCurr");
      $(this).parent("div").children(".faq_warp").slideDown("fast");
    } else {
      $(this).children("i").addClass("piconzengjia-01").removeClass("piconiconfront-");
      $(this).parent("div").removeClass("faq_listCurr");
      $(this).parent("div").children(".faq_warp").slideUp("fast");
    }
  });
  //评论的大图
  $(".reviceImg dd").hide();
  $(".reviceImg ol li").click(function () {
    if ($(this).hasClass("curr")) {
      $(this).parent("ol").parent("dt").parent("dl").children("dd").hide();
      $(this).removeClass("curr");
    } else {
      $(this).addClass("curr");
      $(this).parent("ol").parent("dt").parent("dl").children("dd").show();
      $(this).parent("ol").parent("dt").parent("dl").children("dd").children("img").attr("src", $(this).children("img").attr("src"));
    }
  });
  var _line = parseInt($(window).height() / 4);
  //点击产品详情5个列表
  $(".pro_info ul li").click(function () {
    $(this).addClass('curr').siblings().removeClass('curr');
    var _i = $(this).index();
    $('body, html').animate({
      scrollTop: ($('.procon_main').eq(_i).offset().top - _line) + "px"
    }, 'fast');
  });
  $(".pro_pingNum").click(function(){
    $('body, html').animate({
      scrollTop: ($('.procon_main').eq(1).offset().top - _line) + "px"
    }, 'fast');
  });
  $(window).scroll(function () {
    scroTop = $(window).scrollTop(); //滚动高度
    var viewH = $(window).height(); //可见高度 
    var contentH = $(document).height(); //内容高度
    if (scroTop > 700) {
      $(".pro_info").attr("style", "position: fixed;top:-20px;background-color: #fff;border-bottom: solid 1px #eee");
      $("header").attr("style", "display:none");
    } else {
      $(".pro_info").removeAttr("style");
      $("header").removeAttr("style");
    };
    //滚动到标杆位置,左侧导航加active
    $('.procon_main').each(function () {
      var _target = parseInt($(this).offset().top - $(window).scrollTop() - _line);
      var _i = $(this).index()-1;
      if (_target <= 0) {
        $('.pro_info ul li').removeClass('curr');
        $('.pro_info ul li').eq(_i).addClass('curr');
      }
      //   //如果到达页面底部，给左侧导航最后一个加active
      else if ($(document).height() == $(window).scrollTop() + $(window).height()) {
        $('.pro_info ul li').removeClass('curr');
        $('.pro_info ul li').eq($('.pro_info ul li').length - 1).addClass('curr');
      }
    });
  });

})