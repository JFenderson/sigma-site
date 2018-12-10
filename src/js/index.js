import logMessage from './logger'
import $ from 'jquery'
import '../styles/styles.scss'

$(document).ready(function() {

  // Log message to console
  logMessage('A very warm welcome to Expack!')
  // Needed for Hot Module Replacement
  if(typeof(module.hot) !== 'undefined') {
    module.hot.accept() // eslint-disable-line no-undef  
  }


	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() >= 40) {
      $('#mainNav').addClass('navbar-solid');
      $('#bar').addClass('bar-sticky');
    }else {
      $('#mainNav').removeClass('navbar-solid');
      $('#bar').removeClass('bar-sticky');
    }
  });

  $('ul.navbar-nav').find('a').click(function(e) {
    // if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
    //     || location.hostname == this.hostname) {

    //     var target = $(this.hash);
    //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //        if (target.length) {
    //          $('html,body').animate({
    //              scrollTop: target.offset().top
    //         }, 1000);
    //         return false;
    //     }
    // }
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
        'scrollTop':  $target.offset().top //no need of parseInt here
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});

  //become a member email to be sent via nodemail(gmail)
  $('#member-submit').click((e) => {
    e.preventDefault();

    let name = $('#name').val();
    let email = $('#email').val();
    let phone = $('#phone-number').val();
    let classification = $('#classification').val();

    fetch(`http://localhost:8080/api/member`, {
      method: 'POST',
      body: JSON.stringify({
        name: name, email: email ,phone: phone, classification: classification 
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        console.log('Success:', response)
        // setTimeout(() => {
        //   window.location.reload();
        // }, 10)
      });
    });

  //for nav
  $('.sidenav').sidenav();
  $('select').formSelect();

  //service slideshow
  $("#slideshow > div:gt(0)").hide();

  setInterval(function() { 
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow');
  },  5000);

});

