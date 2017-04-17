$(document).ready(function() {
    //更多产品的hover事件
    $("#more").bind('mouseover', function() {
        $("#morenave").show();
    });
    $("#morenave").bind('mouseleave', function() {
        $(this).hide();
    });

    var setSkin = $("#set_skin"); //设置皮肤按钮
    skinWrp = $(".set-skin-wrapper") //皮肤显示容器

    //判断上一次是否设置皮肤
    if (localStorage.skin != null) {
        changeSkin(localStorage.skin);
    }

    //设置皮肤
    setSkin.mouseover(function(event) {
        skinWrp.show();
        console.log(skinWrp);
    });
    skinWrp.mouseleave(function() {
        skinWrp.hide();
    });


    //绑定点击事件
    skinWrp.find("div[class='skin-item']").each(function(index, value) {
        $(value).click(function() {
            localStorage.skin = index;
            changeSkin(index);
        });
    });

    //tab切换
    $("#s_menus_wrapper span").each(function(index, value) {
        $(value).click(function() {
            $("#s_menus_wrapper span[class='s-menu-list current']").removeClass("current");
            $(this).addClass("current");
            $("#s_ctner_contents > div:visible").hide()
            $("#s_content_" + index).show();
            // console.log(this);
        });
    });
    // $("#s_menus_wrapper span").each(function(index, value) {
    //        $(value).click(function() {
    //            $("#s_menus_wrapper span[class='s-menu-list current']").removeClass("current");
    //            $(this).addClass("current");
    //            $("#s_ctner_contents > div:visible").hide()
    //            $("#s_content_"+index).show();
    //        });
    //    });

    //更换皮肤方法
    function changeSkin(img) {
        if (img != undefined) {
            if (img < 2) {
                var i = img.toString();
                $("#wrapper").removeClass().addClass("wrapper-img" + i);
                $("#s_lg_img").attr({
                    "src": "./image/logo_white.png",
                    "background-repeat": " no-repeat"
                });
            } else {
                $("#wrapper").removeClass();
                $("#s_lg_img").attr({
                    "src": "./image/bd_logo1.png",
                    "background-repeat": " no-repeat"
                });
            }
        }
    }
});
//侧边栏出现状况
$(document).ready(function() {
    $('aside').hover(function() {
        $('body').css({
            'overflow': 'hidden'
        });
    }, function() {
        $('body').css({
            'overflow-y': 'scroll',
             'overflow-x': 'hidden'
        });


    });
});
//float搜索框
$(document).ready(function() {
    var showHeight = 200;
    $(window).scroll(function() {
        if ($(window).scrollTop() > showHeight) {
            $('#floatSearch').slideDown(100);
        } else if ($(window).scrollTop() < showHeight) {
            $('#floatSearch').slideUp(100);
        }
    });
});
  //阻止跳转事件
$(document).ready(function(){
    $('#fbtn').click(function(e){
        e.preventDefault();
    });
});
$(document).ready(function(){
    $('#su').click(function(e){
        e.preventDefault();
    });
});
