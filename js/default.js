 $(function(){

  $(".includedHeader").load("header.html"); 

  $('.btn_menu').on('click', function(){
    $(this).toggleClass('active');
    $('.navigation').toggleClass('active').stop().slideToggle();
  })

  $('header .search input').on('focus', function(){
    $(this).addClass('active');
  })

  $('header .search input').on('blur keyup', function(){
    var val = $(this).val();
    if(val == ''){
      $(this).removeClass('active');
    }
  })
  var img = $('.detail_info .list img');
  
  img.on('click', imgInfo);
  
  function imgInfo(){
    var src = $(this).attr('src');
    var alt = $(this).attr('alt');
    var thoumb = $('.tuoumbnail');
  
    thoumb.attr('src', src).attr('alt', alt);
  }

  $(window).on('resize load', resize);

  function resize() {
    var winWidth = $(window).width();
    if( winWidth < 1199) {
      var img = $('.tuoumbnail');
      var li = $('.detail_info .list li');
      var imgWid = img.width();
      var imgHig = imgWid / 2;

      img.css('height', imgWid);
      li.find('img').css('height', imgHig - 4.225);
      $('.detail_info .more span').removeClass('hide');
    }else {
      $('.tuoumbnail').removeAttr('style');
      $('.detail_info .list li img').removeAttr('style');
      $('.detail_info .more span').addClass('hide')
    }
  }

})

