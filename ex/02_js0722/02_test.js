// window.onload = () => {
//       let input_1 = document.querySelectorAll('input')[0];
//       let input_2 = document.querySelectorAll('input')[1];
//       input_1.onkeydown = () => {
//           if (6 <= input_1.value.length) {
//               input_2.focus();
//           }
//       }
//       input_2.onkeydown = (event) => {
//           event = event || window.event;
  
//           if (event.keyCode == 8 && input_2.value.length == 0) {
            
//               input_1.focus();
//           }
//       };
//   };
// -----------------------------------------------------------------------------

// window.onload = function () {
     
//       let count = 0;
//       let image = document.getElementById('image');
//       let frames = [
//           '0.png', '1.png', '2.png', '3.png', '4.png', 
//           '5.png', '6.png', '7.png', '8.png', '9.png', 
//           '10.png', '11.png', '12.png', '13.png', '14.png'
//       ];
      
//       setInterval(function () {
//           image.src = frames[count % frames.length];
//           count = count + 1;
//       }, 1000 / 20);
//   };
// -----------------------------------------------------------------------------
// $(document).ready(()=>{
//       $('<h1>Create Document Object By jQuery</h1>')
// });
// -----------------------------------------------------------------------------
// $(document).ready( () => {
      
//       for (let i = 0; i < 10; i++) {
//           $('<h1>안녕하세요 + ' + i + '</h1>')
//           .css({
//               backgroundColor: 'rgb(210,170,0)',
//               color: 'white'
//           }).appendTo('body');
          
//       }  
     
//   });
// -----------------------------------------------------------------------------

// $(document).ready(() => {
//       let appendDocument = () => {
        
//           for (var i = 0; i < 20; i++) {
//               $('<h1> 스크롤</h1>').appendTo('body');
//           }
//       };
  
//       appendDocument(); 
  
//       $(window).scroll(() => {
//           let scrollHeight = $(window).scrollTop() + $(window).height();
//           let documentHeight = $(document).height();
  
          
//           if (scrollHeight >= documentHeight) {
//               appendDocument(); 
//           }
  
          
//           if ($(window).scrollTop() > 50) {
//               $('#topButton').fadeIn();
//           } else {
//               $('#topButton').fadeOut();
//           }
//       });
  
//       $('#top').click(() => {
//           $('html, body').animate({ scrollTop: 0 }, 'slow');
//           return false;
//       });
  
      
//       $('body').append('<button id="topButton" style="display:none; position:fixed; bottom:10px; right:10px; z-index:1000;">Top</button>');
//   });

// -----------------------------------------------------------------------------

// $(document).ready(function () {
//       $('a.light').lightBox();
//   });
  
  // -----------------------------------------------------------------------------
  $(document).ready(function () {
      
      for (let i = 0; i < 100; i++) {
          $('<div></div>').addClass('box').css({
              width: 100,
              height: Math.floor(Math.random() * 100) + 50
          }).appendTo('body');
      }

      
      $('body').masonry({
          columnWidth: 110
      });
  });