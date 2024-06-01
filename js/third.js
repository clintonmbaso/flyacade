   $(document).ready(function()
   {
      $("#photoClipArt").animatesvg(
      {
         delay: 200,
         duration: 2000,
         easing: 'linear',
         loop: true
      });
      $("#photoClipArt").animatesvg('animate');
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      $("#quotesCardContainer").owlCarousel({autoplayTimeout:10000, margin: 16, autoplay: true, nav: false, loop: true, dots: true, responsive: {0: {items: 1},320: {items: 1}, slideBy: 1}});
      $("a[href*='#galaryLayoutGrid']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_galaryLayoutGrid').offset().top-80 }, 600, 'linear');
      });
      $('#wb_galaryLayoutGrid').parallax();
      $("a[href*='#mainLayoutGrid']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_mainLayoutGrid').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#services1LayoutGrid']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services1LayoutGrid').offset().top-88 }, 600, 'easeOutCirc');
      });
      searchParseURL('SiteSearch');
      searchAutoComplete('SiteSearch', 0, '_parent');
      $("a[href*='#backtoTop']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_backtoTop').offset().top }, 800, 'linear');
      });
      $('#wb_LayoutGrid1').parallax();
      function onScrolltopfooterLayoutGridDividerTop()
      {
         var $obj = $('#topfooterLayoutGrid-divider-top');
         if (!$obj.hasClass('show') && $obj.inViewPort(false))
         {
            $obj.addClass('show');
         }
      }
      onScrolltopfooterLayoutGridDividerTop();
      $(window).scroll(function(event)
      {
         onScrolltopfooterLayoutGridDividerTop();
      });
      $("#videoClipArt").animatesvg(
      {
         delay: 200,
         duration: 2000,
         easing: 'linear',
         loop: true
      });
      $("#videoClipArt").animatesvg('animate');
      $("#audioClipArt").animatesvg(
      {
         delay: 200,
         duration: 2000,
         easing: 'linear',
         loop: true
      });
      $("#audioClipArt").animatesvg('animate');
      $("#teachingClipArt").animatesvg(
      {
         delay: 200,
         duration: 2000,
         easing: 'linear',
         loop: true
      });
      $("#teachingClipArt").animatesvg('animate');
      $("#extralessonsClipArt").animatesvg(
      {
         delay: 200,
         duration: 2000,
         easing: 'linear',
         loop: true
      });
      $("#extralessonsClipArt").animatesvg('animate');
      $("#childliteracyClipArt").animatesvg(
      {
         delay: 200,
         duration: 2000,
         easing: 'linear',
         loop: true
      });
      $("#childliteracyClipArt").animatesvg('animate');
      $("a[href*='#services2LayoutGrid']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services2LayoutGrid').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("#computerlessonsClipArt").animatesvg(
      {
         delay: 200,
         duration: 2000,
         easing: 'linear',
         loop: true
      });
      $("#computerlessonsClipArt").animatesvg('animate');
      $("#adultliteracyClipArt").animatesvg(
      {
         delay: 200,
         duration: 2000,
         easing: 'linear',
         loop: true
      });
      $("#adultliteracyClipArt").animatesvg('animate');
      $("#audiovisualClipArt").animatesvg(
      {
         delay: 200,
         duration: 2000,
         easing: 'linear',
         loop: true
      });
      $("#audiovisualClipArt").animatesvg('animate');
      $("#missionClipArt").animatesvg(
      {
         delay: 200,
         duration: 2000,
         easing: 'linear',
         loop: true
      });
      $("#missionClipArt").animatesvg('animate');
      $('#babyclassText').parallax();
      $('#middleclassText').parallax();
      $('#receptionclassText').parallax();
      $('#grade1Text').parallax();
      $('#grade5Text').parallax();
      $("#goalClipArt").animatesvg(
      {
         delay: 200,
         duration: 2000,
         easing: 'linear',
         loop: true
      });
      $("#goalClipArt").animatesvg('animate');
      $("#visionClipArt").animatesvg(
      {
         delay: 200,
         duration: 2000,
         easing: 'linear',
         loop: true
      });
      $("#visionClipArt").animatesvg('animate');
      $("a[href*='#About-us']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_About-us').offset().top }, 600, 'linear');
      });
      $('#grade2Text').parallax();
      $('#grade3Text').parallax();
      $('#grade4Text').parallax();
      $("#CardContainer1").owlCarousel({autoplayTimeout:10000, margin: 16, autoplay: true, nav: false, loop: true, dots: true, responsive: {0: {items: 1},320: {items: 1},480: {items: 1}, slideBy: 1}});
      $('#Text8').parallax();
      $("#PanelLayer").panel({animate: true, animationDuration: 500, animationEasing: 'easeOutCirc', dismissible: true, display: 'overlay', position: 'left'});
      $('.OverlayMenu2 .item-has-children').children('a').on('click', function(event)
      {
         event.preventDefault();
         $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(0,'linear').end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(0,'linear');
      });
   });