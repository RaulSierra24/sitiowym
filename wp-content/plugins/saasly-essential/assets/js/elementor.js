( function( $ ) {
  
   
     /*===============================  
         BRAND ACTIVE SLICK JS
    ================================*/
      var WidgetSponsor = function( $scope, $ ) {
    
            var $container            = $scope.find('.brand-2-active');
            var controls              = null;
            var control_obj           = {};
                controls              = JSON.parse($container.attr('data-controls'));
            var number_of_items       = parseInt(controls.number_of_items);
            var slider_autoplay       = Boolean(controls.slider_autoplay == 'yes'?true:false);
            var slider_inifinit       = Boolean(controls.slider_inifinit == 'yes'?true:false);
            var slider_autoplay_speed = parseInt(controls.slider_autoplay_speed);
  
            $container.slick({
            arrows: false,
            dots: false,
            infinite: slider_inifinit,
            slidesToShow: number_of_items,
            slidesToScroll: 1,
            variableWidth: true,
            autoplay: slider_autoplay,
            autoplaySpeed: slider_autoplay_speed,
           
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: number_of_items,
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
        
      
    }; 
    /* end sponsor */
  
    
      /*===============================  
         TESTIMONIAL ACTIVE SLICK JS
    ================================*/
    var Testimonial_Slider = function( $scope, $ ) {

            var $container  = $scope.find('.testimonial__slider');
            
            var controls    = null;
            var style       = null;
            var dot         = false;
            var control_obj = {};
            var center_item = false;
            controls    = JSON.parse($container.attr('data-controls'));
            style       = $container.attr('data-style');
            control_obj = appscred_slider_controls(controls);
            center_item       = $container.attr('data-center');
            if(!control_obj.slider_enable){
              return;
            }  

            if(style  == 'dot-nav'){
              dot = true;
            }
             
            if(center_item == 'yes'){
                center_item = true;
                }else{
                 center_item = false;
                }
                
           $container.slick({
            arrows: control_obj.appscred_slider_nav_show,
            prevArrow: '<span class="prev"><i class="fal fa-arrow-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-arrow-right"></i></span>',
            dots: dot,
            infinite: control_obj.appscred_slider_loop,
            slidesToShow: control_obj.appscred_slider_items,
            slidesToScroll: 1,
            autoplay: control_obj.appscred_slider_autoplay,
            autoplaySpeed: control_obj.appscred_slider_autoplay_timeout,
            centerMode:center_item,
            centerPadding: parseInt(control_obj.appscred_slider_padding)+'px',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: control_obj.appscred_slider_items,
                    }
                },
                 {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: control_obj.appscred_slider_items,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: control_obj.appscred_slider_items_tablet,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: control_obj.appscred_slider_items_mobile,
                        arrows: false,

                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: control_obj.appscred_slider_items_mobile,
                        arrows: false,

                    }
                }
            ]
        });
      }
         /*===============================  
         Image Slider SLICK JS
        ================================*/
    var Widget_Image_Slider = function( $scope, $ ) {

      var $container  = $scope.find('.screenshorts-active');
      var controls    = null;
      var control_obj = {};
  
      controls    = JSON.parse($container.attr('data-controls'));
      control_obj = appscred_slider_controls(controls);
     
      if(!control_obj.slider_enable){
        return;
      }  
      
      $container.slick({
        arrows: false,
        dots: control_obj.appscred_slider_nav_show,
        infinite: control_obj.appscred_slider_loop,
        slidesToShow: control_obj.appscred_slider_items,
        slidesToScroll: 1,
        autoplay: control_obj.appscred_slider_autoplay,
        autoplaySpeed: control_obj.appscred_slider_autoplay_timeout,
        centerMode:true,
        focusOnSelect: true,
        centerPadding: parseInt(control_obj.appscred_slider_padding)+'px',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: control_obj.appscred_slider_items,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: control_obj.appscred_slider_items,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: control_obj.appscred_slider_items_tablet,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: control_obj.appscred_slider_items_tablet,
                    arrows: false,
    
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: control_obj.appscred_slider_items_mobile,
                    arrows: false,
    
                }
            }
        ]
    });

    }; 

	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {


	   	elementorFrontend.hooks.addAction( 'frontend/element_ready/appscred-testimonial-slider.default', Testimonial_Slider );
	   	elementorFrontend.hooks.addAction( 'frontend/element_ready/appscred-brand.default', WidgetSponsor );
	   	elementorFrontend.hooks.addAction( 'frontend/element_ready/appscred-images-slider.default', Widget_Image_Slider );
	 
    } );

   
   // utility function  
   // get slider control default settings
   function appscred_slider_controls(controls=[]){
    var newObj = {

      appscred_slider_autoplay:true,
      appscred_slider_loop:false,
      appscred_slider_autoplay_hover_pause:false,
      appscred_slider_autoplay_timeout:5000,
      appscred_slider_dot_nav_show:false,
      appscred_slider_items:3,
      appscred_slider_items_mobile:1,
      appscred_slider_items_tablet:3,
      appscred_slider_padding:5,
      appscred_slider_nav_show:false,
      appscred_slider_smart_speed:250,

    };
  
    if ('appscred_slider_autoplay' in controls){
      if(controls.appscred_slider_autoplay == 'yes'){
        newObj.appscred_slider_autoplay = true;
      }else{
        newObj.appscred_slider_autoplay = false;
      }  
    }  
    
    if ('appscred_slider_loop' in controls){
      if(controls.appscred_slider_loop == 'yes'){
        newObj.appscred_slider_loop = true;
      }else{
        newObj.appscred_slider_loop = false;
      }  
    }

    if ('appscred_slider_dot_nav_show' in controls){
      if(controls.appscred_slider_dot_nav_show == 'yes'){
        newObj.appscred_slider_dot_nav_show = true;
      }else{
        newObj.appscred_slider_dot_nav_show = false;
      }  
    }
     if ('appscred_slider_nav_show' in controls){
      if(controls.appscred_slider_nav_show == 'yes'){
        newObj.appscred_slider_nav_show = true;
      }else{
        newObj.appscred_slider_nav_show = false;
      }  
    }

    if ('appscred_slider_autoplay_timeout' in controls){
       newObj.appscred_slider_autoplay_timeout = parseInt( controls.appscred_slider_autoplay_timeout );
    }

    if ('appscred_slider_items' in controls){
        newObj.appscred_slider_items = parseInt( controls.appscred_slider_items || 1 );
    }
    
    if ('slider_enable' in controls){
        newObj.slider_enable = Boolean( controls.slider_enable =='yes'?true:false);
    }

    if ('appscred_slider_items_mobile' in controls){
        newObj.appscred_slider_items_mobile = parseInt( controls.appscred_slider_items_mobile || 1 );
    }
    if ('appscred_slider_items_tablet' in controls){
        newObj.appscred_slider_items_tablet = parseInt( controls.appscred_slider_items_tablet || 1 );
    }
    
    if ('appscred_slider_padding' in controls){
        newObj.appscred_slider_padding =  controls.appscred_slider_padding || '0';
    } 
    
    if ('appscred_slider_smart_speed' in controls){
        newObj.appscred_slider_smart_speed =  controls.appscred_slider_smart_speed || 250;
    }
    return newObj; 
  }

  
} )( jQuery );


