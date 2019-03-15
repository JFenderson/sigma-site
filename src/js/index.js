import logMessage from './logger'
import $ from 'jquery'
import '../styles/styles.scss'
import moment from 'moment'


$(window).on('load', function() {
  $(".pageloader").delay(2000).fadeOut("slow");
  $('body').removeClass('hidden');
  // // Log message to console
  // logMessage('A very warm welcome to Expack!')
  // // Needed for Hot Module Replacement
  // if(typeof(module.hot) !== 'undefined') {
  //   module.hot.accept() // eslint-disable-line no-undef  
  // }
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
    if ($(window).scrollTop() >= 40) {
      $('#mainNav').addClass('navbar-solid');
      $('#bar').addClass('bar-sticky');
    }else {
      $('#mainNav').removeClass('navbar-solid');
      $('#bar').removeClass('bar-sticky');
    }
  });

  $('ul.navbar-nav').find('a').click(function(e) {
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

  function importAll(r) {
    let images = {};
    r.keys().map((item) => { 
      $('#slideshow').append(
        `<div><img src=${r(item)}></div>`
        )
      images[item.replace('./', '')] = r(item); 

    });
  }
  
  importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

  //service slideshow
  $("#slideshow > div:gt(0)").hide();

  setInterval(function() { 
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow');
  },  9000);


  // //getting calendar info from back end
  fetch('http://localhost:8080/api/calendar')
  .then((res) => {
     return res.json()
  })
  .then((data) => {
    let eventList = data.map((event) => {
      console.log(event)
      if(event.description){
        $('.event-row').append(`  
          <div class="col s12 m6 l6">
            <ul class="event-list">
              <li key="${event.id}">
                  <time datetime="${event.start}">
                    <span class="day">${moment(event.start.date).format('DD')}</span>
                    <span class="month">${moment(event.start.months).format('MMM')}</span>
                  </time>
                  <div class="info">
                    <h2 class="title">${event.summary.toUpperCase()}</h2>
                    <span class="time"> Start:${moment(event.start.hours).format('hh')}:${moment(event.start.minutes).format('mm')}</span>
                    <p>${event.description}</p>
                  </div>
              </li>
            </ul>
          </div>`                      
           )
      }else{
        $('.event-row').append(`  
        <div class="col s12 m6 l6">
          <ul class="event-list">
            <li key="${event.id}">
                <time datetime="${event.start}">
                  <span class="day">${moment(event.start.date).format('DD')}</span>
                  <span class="month">${moment(event.start.months).format('MMM')}</span>
                </time>
                <div class="info">
                  <h2 class="title">${event.summary.toUpperCase()}</h2>
                  <span class="time"> start time:${moment(event.start.hours).format('hh')}:${moment(event.start.minutes).format('mm')}</span>
                </div>
            </li>
          </ul>
        </div>`                      
         )
      }
       })
    return eventList;
  })  
  .catch((err) => {
    console.error(err)
    })
});
