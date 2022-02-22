;
(function ($) {

    "use strict";
 
    /*===============================  
         Prealoder
    ================================*/
  
    if ($('#preloader').length) {
        $('#preloader').fadeOut();
    }
    /*===============================  
         Sticky
    ================================*/

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".header-area").removeClass("sticky");
            $(".header-nav").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
            $(".header-nav").addClass("sticky");
        }
    });

    /*===============================  
         Mobile Menu 
    ================================*/

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass('active');
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");

    if (subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-angle-down"></i> </button>';
        });

        var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");

        subMenuToggler.on('click', function () {
            $(this).parent().parent().children(".sub-menu").slideToggle();
            return false
        });

    }

    /*===============================  
         faq accrodion
    ================================*/

    if ( $('.accrodion-grp').length ) {
        var accrodionGrp = $('.accrodion-grp');
        accrodionGrp.each(function () {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            var accordion = Self.find('.accrodion');
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            accordion.each(function () {
                $(this).find('.accrodion-title').on('click', function () {
                    if ($(this).parent().parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().parent().addClass('active');
                        $(this).parent().parent().find('.accrodion-content').slideDown();
                    };


                });
            });
        });

    };
   

    /*===============================  
         Magnific Popup
    ================================*/
    
    $('.video-popup').magnificPopup({

        type: 'iframe'
        // other options
    }); 
    
    /*===============================  
        Blog Video Popup
    ================================*/
    
    $('.blog-video-popup').magnificPopup({

        type: 'iframe'
        // other options
    });
    
    
    /*===============================  
         Magnific Popup
    ================================*/
    
    $('.image-popup').magnificPopup({

      type: 'image',
      gallery:{
        enabled:true
      }

    });

    /*===============================  
         counter up
    ================================*/

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    /*===============================  
         Back to top
    ================================*/


    $(window).on('scroll', function (event) {

        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }

    });

    /*===============================  
         Animate the scroll to yop
    ================================*/

    $('.back-to-top').on('click', function (event) {

        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);

    });

    /*===============================  
         pricing plan js active
    ================================*/

    if ($('#switch-toggle-tab').length) {

        var toggleSwitch = $('#switch-toggle-tab label.switch');
        var TabTitle = $('#switch-toggle-tab li');
        var monthTabTitle = $('#switch-toggle-tab li.month');
        var yearTabTitle = $('#switch-toggle-tab li.year');
        var monthTabContent = $('#month');
        var yearTabContent = $('#year');
        // hidden show deafult;
        monthTabContent.fadeIn();
        yearTabContent.fadeOut();

        function toggleHandle() {
            if (toggleSwitch.hasClass('on')) {
                yearTabContent.fadeOut();
                monthTabContent.fadeIn();
                monthTabTitle.addClass('active');
                yearTabTitle.removeClass('active');
            } else {
                monthTabContent.fadeOut();
                yearTabContent.fadeIn();
                yearTabTitle.addClass('active');
                monthTabTitle.removeClass('active');
            }
        };

        monthTabTitle.on('click', function () {
            toggleSwitch.addClass('on').removeClass('off');
            toggleHandle();
            return false;
        });

        yearTabTitle.on('click', function () {
            toggleSwitch.addClass('off').removeClass('on');
            toggleHandle();
            return false;
        });

        toggleSwitch.on('click', function () {
            toggleSwitch.toggleClass('on off');
            toggleHandle();
        });
    }

    /*===============================  
            COMMENTS
    ================================*/
    var comment_form = $('textarea#comment');
    if (comment_form.length) {
        $('textarea#comment').html($('textarea#comment').html().trim());
    }

    /*===============================
         wow js
    ================================*/
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 250, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    } 


})(jQuery);
