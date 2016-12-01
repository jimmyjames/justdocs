function init() {

  //sidebar dropdown menu
  jQuery('#sidebar .sub-menu > a').click(function () {
    // Close previous open submenu
    // var last = jQuery('.sub.open', jQuery('#sidebar'));
    // jQuery(last).slideUp(200);
    // jQuery(last).removeClass("open");
    // jQuery('.menu-arrow', jQuery(last).parent()).addClass('fa-angle-right');
    // jQuery('.menu-arrow', jQuery(last).parent()).removeClass('fa-angle-down');

    var above = jQuery(this).prev('.sub-menu');
    // Toggle current submenu
    var sub = jQuery(this).next();
    if (sub.is(":visible")) {
      jQuery('.menu-arrow', this).addClass('fa-angle-right');
      jQuery('.menu-arrow', this).removeClass('fa-angle-down');
      sub.slideUp(200);
      jQuery(sub).removeClass("open");
      jQuery(this).prev('.sub-menu').removeClass('open');
      // jQuery(above).removeClass("open");
    } else {
      jQuery('.menu-arrow', this).addClass('fa-angle-down');
      jQuery('.menu-arrow', this).removeClass('fa-angle-right');
      sub.slideDown(200);
      jQuery(sub).addClass("open");
      jQuery(this).prev('.sub-menu').addClass('open');
      // jQuery(above).addClass("open");
    }

    // Center menu on screen
    // var o = (jQuery(this).offset());
    // diff = 200 - o.top;
    // if(diff>0) {
    //   jQuery("#sidebar").scrollTo("-="+Math.abs(diff),500);
    // } else {
    //   jQuery("#sidebar").scrollTo("+="+Math.abs(diff),500);
    // }
  });

  $('.toggle-nav').on('click', function(event) {
    console.log('toggle nav clicked');
    $('#sidebar').addClass('show-sidebar');
    $('#sidebar .sidebar-nav').addClass('show-sidebar-nav');
    // $('sidebar').css('display', 'block');
    // $('#sidebar').show();
    // $('#sidebar .sidebar-nav').css('margin-top', 0);
    // $('#sidebar .sidebar-nav').css('margin-left', 0);
    // $('#sidebar .sidebar-nav').css('height', "100%");
    // $('#sidebar').css('z-index', 1002);
  });
  $('#close-button').on('click', function(event) {
    console.log('close menu clicked');
    $('#sidebar').removeClass('show-sidebar');
    $('#sidebar .sidebar-nav').removeClass('show-sidebar-nav');
  });

  // $('#toc-nav').affix({
  //   offset: {
  //       // top: $('#nav').offset().top
  //       top: $('#header').offset().top - 1000
  //   }
  // });

  // multi-code blocks
  $('#multi-code').find('pre').each(function() {
    console.log("item: " + this);
  });

  // poor man's scrollspy ;)

  var lastId,
    topMenu = $("#TableOfContents"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+100;
      $('html, body').stop().animate({
          scrollTop: offsetTop
      }, 300);
      e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
       // affix toc]
       var totHeight = $('#header').outerHeight() + $('.article-tagline').outerHeight();
       console.log("totHeight: " + totHeight);
       if ($(this).scrollTop() > $('.article-body').offset().top) {
         $('#TableOfContents').addClass('floating');
       } else {
         $('#TableOfContents').removeClass('floating');
       }
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;

       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";

       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           menuItems
             .parent().removeClass("active")
             .end().filter("[href='#"+id+"']").parent().addClass("active");
       }
    });

  // scroll in page
  // var offset = $(':target').offset();
  // var scrollto = offset.top - 60; // minus fixed header height
  // $('html, body').animate({scrollTop:scrollto}, 0);
  // var controller = new slidebars();
  // controller.init();
  //
  // $('.toggle-nav').on( 'click', function ( event ) {
  //   // Stop default action and bubbling
  //   event.stopPropagation();
  //   event.preventDefault();
  //
  //   // Toggle the Slidebar with id 'id-1'
  //   controller.toggle('off-canvas-id');
  // });

  // jQuery('.toggle-nav').click(function () {
  //       if (jQuery('#sidebar > ul').is(":visible") === true) {
  //           jQuery('#main-content').css({
  //               'margin-left': '0px'
  //           });
  //           jQuery('#sidebar').css({
  //               'margin-left': '-180px'
  //           });
  //           jQuery('#sidebar > ul').hide();
  //           jQuery("#container").addClass("sidebar-closed");
  //       } else {
  //           jQuery('#main-content').css({
  //               'margin-left': '180px'
  //           });
  //           jQuery('#sidebar > ul').show();
  //           jQuery('#sidebar').css({
  //               'margin-left': '0'
  //           });
  //           jQuery("#container").removeClass("sidebar-closed");
  //       }
  //   });
}
jQuery(document).ready(function() {
  init();
});
