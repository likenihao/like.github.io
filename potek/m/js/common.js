var scroTop = $(window).scrollTop(); //滚动高度
$(function(){
    var height=$(window).height();//当下文档可见高度 
    $(".tbar-panel-main").height(height - 180 + "px"); //动态控制购物车的高度
    $(".emaillabel .piconfont").click(function(){
        if($(this).hasClass("piconfuxuankuang_weixuanzhong"))
        {
           $(this).addClass("piconfuxuankuang_xuanzhong").removeClass("piconfuxuankuang_weixuanzhong");
        }else
        {
            $(this).removeClass("piconfuxuankuang_xuanzhong").addClass("piconfuxuankuang_weixuanzhong");
        }
    });
    //top menu
    $(".menuIco").click(function(){
        if($(this).hasClass("piconcaidan"))
        {
            $(this).removeClass("piconcaidan").addClass("piconchenghao");
            $(".downmenu").addClass("downmenucurr");
            $(".downmenu").attr("style", "height:"+(height-44)+"px;transition: 600ms;");
        }else
        {
            $(".downmenu").removeClass("downmenucurr");
            $(this).addClass("piconcaidan").removeClass("piconchenghao");
            $(".downmenu").attr("style", "height:0px;transition: 600ms;");
        }
       
    });
    $(".personmenu").click(function(){
        if($(this).hasClass("piconwoCurr"))
        {
            $(this).removeClass("piconwoCurr");
            $(".persondownmenu").removeClass("persondownmenucurr");  
            $(".persondownmenu").attr("style", "height:0px;transition: 600ms;");
        }else
        {
            $(this).addClass("piconwoCurr");   
         
            $(".persondownmenu").addClass("persondownmenucurr");      
            $(".persondownmenu").attr("style", "height:"+(height-44)+"px;transition: 600ms;");
        }
    });
    $("body").click(function (e) {
        if (!$(e.target).closest(".menuIco,.downmenu").length) {
            $(".menuIco").addClass("piconcaidan").removeClass("piconchenghao");
            $(".downmenu").attr("style", "height:0px;transition: 600ms;");
        }
        if (!$(e.target).closest(".personmenu,.persondownmenu").length) {
            $(".personmenu").removeClass("piconwoCurr");
            $(".persondownmenu").attr("style", "height:0px;transition: 600ms;");
        }
    });
     //监控滚动
     $(".gotop").hide();
     $(window).scroll(function () {
       var scroTop = $(window).scrollTop(); //滚动高度
       console.log(scroTop);
         if(scroTop>1000)
         {
           $(".gotop").show("fast");   
         }else
         {
             $(".gotop").hide("fast");   
         }
     });
    //底部菜单
    $(".bmenu dl dt").click(function(){
        if($(this).parent("dl").hasClass("toggle"))
        {
            $(this).children("span").removeClass("jiaCurr");
            $(this).parent("dl").removeClass("toggle");
        }else{
            $(this).children("span").addClass("jiaCurr");
            $(this).parent("dl").addClass("toggle");
        }
    });
   
})