$(function () {


//////头部导航
$(".m_nav2 span").unbind().bind("click", ChangeMenu);

///////返回顶部
$('.f_top').on('click',function(){
    $('body,html').animate({ scrollTop: 0 }, 500);
    return false;
});














});


function ChangeMenu() {
    if ($(".m_nav2").children(".erji").css('display') == "block") {
        $(".m_nav2").children(".erji").hide();
    } else {
        $(".m_nav2").children(".erji").hide();
        $(".m_nav2").children(".erji").show();

    }

    if ($(".m_nav2").children(".oo").css('display') == "block") {
        $(".m_nav2").children(".oo").hide();
        $(".m_nav2").children(".xx").show();
    } else {
        $(".m_nav2").children(".xx").hide();
        $(".m_nav2").children(".oo").show();

    }

}


/////banner图片滚动
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
 ///////
  var swiper1 = new Swiper('.qua_warp', {
    spaceBetween: 30,
    centeredSlides: ture,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.qua_pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  //////
  var swiper2 = new Swiper('.eng_warp', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.eng_pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });























































































































