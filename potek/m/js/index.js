
var mySwiper = new Swiper('.banner1', {
    autoplay: true,//可选选项，自动滑动
    effect:'fade',
    loop:true,
    pagination: {
    el: '.swiper-pagination',
    clickable :true,
  },
});
$(function(){
  single = $('.single').mySingleScroll({
    speed: 2000
});
})