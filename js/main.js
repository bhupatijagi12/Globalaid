$(function(){
  $('.navbar-nav a').on('click',function(){$('.navbar-collapse').collapse('hide');});
  function reveal(){ $('.reveal').each(function(){if($(this).offset().top < $(window).scrollTop()+$(window).height()-60)$(this).addClass('visible');}); }
  $(window).on('scroll resize',reveal); reveal();
  $('.counter').each(function(){var $t=$(this),target=+$t.data('target');$({n:0}).animate({n:target},{duration:1600,easing:'swing',step:function(){$t.text(Math.ceil(this.n));},complete:function(){$t.text(target);}});});
  $('form').on('submit',function(e){e.preventDefault();$(this).find('.status').hide().html('<span class="text-success fw-bold">Thank you. Your demonstration request has been recorded.</span>').fadeIn(500);this.reset();});
  $('.year').text(new Date().getFullYear());
});