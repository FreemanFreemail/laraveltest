"use strict";

$(function () {
    var docW = $(window).width();
    var docH = $(window).height();
    var frameEle = $(".frame-overlay");
    var mainOverlay = $(".main-overlay");
    var menuTop = $(".menu-top");
    var viewFinder = $(".viewfinder");
    var main =$(".main");
    var FxHead = $(".fixed-header");

    /* Calculate main padding */
    var rewardTop = $(".rewards").offset().top;
    var maintop = $(".main").offset().top;
    var mainEleHeight = 0;
    var diffH = 235;
    if (docW <= 576) {
        mainEleHeight = docH / 2;
        // diffH = 100;
        // rewardTop = rewardTop - diffH;
    } else {
        mainEleHeight = diffH + 15;
        $(".main").css("padding-top", docH - diffH);
        mainOverlay.css("height", mainEleHeight);
        rewardTop = rewardTop + 550;
    }
    /* End Calculate main */
    //console.log(maintop);
    //console.log(rewardTop);

    $(window).scroll(function () {
        var curpos = $(window).scrollTop();
        //console.log(curpos);
        /* Move main Background */
        mainOverlay.css("height", curpos + mainEleHeight);

        /* On scroll menu */
        if (curpos >= 100) {
            frameEle.addClass("bg-frame-overlay");
            /* Hide main Background */
            mainOverlay.addClass("hide");
            //frameEle.addClass("bg-frame-overlay").children().addClass("hide");
        } else {
            frameEle.removeClass("bg-frame-overlay");
            /* Show main Background */
            mainOverlay.removeClass("hide");
            //frameEle.removeClass("bg-frame-overlay").children().removeClass("hide");
        }
        //console.log(curpos);
        if (curpos >= rewardTop) {
        //if (curpos >= maintop) {
            /* Hide Menu Top and Viewfinder */
            menuTop.addClass("hide");
            viewFinder.addClass("hide");

            if (docW <= 576) {
                $(".masthead-mobile").css("position", "fixed");
            }
            if (FxHead.hasClass("animate__fadeOutUp")) {
                FxHead.removeClass("animate__fadeOutUp").addClass(["pinned", "animate__fadeInDown"]);
            }
        } else if (curpos >= 400) {
          //if (curpos >= maintop) {
              /* Hide Menu Top and Viewfinder */
              menuTop.addClass("hide");
              viewFinder.addClass("hide");

        } else {
            /* Show Menu Top and Viewfinder */
            menuTop.removeClass("hide");
            viewFinder.removeClass("hide");

            if (docW <= 576) {
                $(".masthead-mobile").css("position", "absolute");
            }
            if (FxHead.hasClass("animate__fadeInDown")) {
                FxHead.removeClass("pinned animate__fadeInDown").addClass(["animate__fadeOutUp"]);
            }
        }
    });
});
