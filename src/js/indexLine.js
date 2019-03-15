import logMessage from './logger'
import $ from 'jquery'
import '../styles/styles.scss'
import json from '../../membersApi.json';

$(window).on('load',function() {
  $(".pageloader").delay(2000).fadeOut("slow");
  $('body').removeClass('hidden');
  // // Log message to console
  // logMessage('A very warm welcome to Expack!')
  // // Needed for Hot Module Replacement
  // if(typeof(module.hot) !== 'undefined') {
  //   module.hot.accept() // eslint-disable-line no-undef  
  // }


  $('.preloader-wrapper')
    .delay(1700)
    .fadeOut();
  
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

  //for nav
  $('.sidenav').sidenav();


  let showmembers = () => {
    for(let i = 0; i < json.length ;i++){

      let div1 = document.createElement('div');
      let memberLine = document.createElement('h5');
      let lineInfo = document.createElement('h5');
      let memberList = document.createElement('ul');
      let memberdiv = document.getElementById('membersList');
      let divHeader = document.createElement('div');
      let divBody = document.createElement('div');
      let divLi = document.createElement('li');
      let divUl = document.createElement('ul');

      divUl.classList.add('collapsible');
      divHeader.classList.add('collapsible-header');
      divBody.classList.add('collapsible-body');

      div1.classList.add('col');
      div1.classList.add('s12');
      div1.classList.add('m6');
      div1.classList.add('l6');
      div1.classList.add('memberDiv');
      $('.memberDiv').attr('id', (i) => {
        return 'div' + (i+1);
      })

      memberList.classList.add('collection')
      memberList.classList.add('membersList')
      $('.membersList').attr('id', (i) => {
        return 'line' + (i+1);
      })

      memberdiv.appendChild(div1);
      div1.appendChild(divUl)
      divUl.appendChild(divLi)
      divLi.appendChild(divHeader)
      divLi.appendChild(divBody)
      divHeader.appendChild(memberLine)
      divHeader.appendChild(lineInfo)
      divBody.appendChild(memberList)

      memberLine.textContent = json[i].linename
      lineInfo.textContent = `${json[i].season} of ${json[i].year}`
        let member = json[i].members;
        for(let j = 0; j < member.length; j++){
          var listItem = document.createElement('li');
          listItem.classList.add('collection-item')
          listItem.classList.add('members')
          listItem.textContent = `${member[j].firstName} ${member[j].lastName} | ${member[j].number}`
          memberList.appendChild(listItem)
          
        }

        // div1.appendChild(memberList)

        
      }
    }

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  showmembers();

});
